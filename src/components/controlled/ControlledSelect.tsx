'use client';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../shadcn';
import type { IHasOptClassName, IHasOptGroup, IHookFormProps, ISelectOption } from '@/interfaces';
import type { SelectProps } from '@radix-ui/react-select';
import type { CSSProperties, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { EMPTY_STRING } from '@/constants';
import { cn, groupBy } from '@/functions';
import type { TNullable } from '@/types';

type TProps = IHookFormProps & SelectProps & IHasOptClassName & IHasOptGroup<boolean> & {
  renderClassNameItem?: (option: ISelectOption) => TNullable<string>;
  renderGroup?: (group?: string) => ReactNode;
  contentStyle?: CSSProperties;
  emtyValue?: ISelectOption;
  options: ISelectOption[];
  placeholder?: ReactNode;
};

export const ControlledSelect = ({ className, ...props }: TProps) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    defaultValue={props.defaultValue || EMPTY_STRING}
    render={
      ({ field: { name: fieldName, onChange, value } }) => (
        <Select
          {...props}
          value={value ?? EMPTY_STRING}
          name={fieldName}
          onValueChange={
            e => {
              props.onValueChange?.(e);
              onChange(e);
            }
          }>
          <SelectTrigger className={cn(
            !value && 'text-muted-foreground',
            className
          )}>
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
          <SelectContent style={props.contentStyle}>
            {
              props.emtyValue &&
              <SelectGroup>
                <ControlledSelectSelectItems options={[props.emtyValue]} />
              </SelectGroup>
            }
            {
              props.group &&
              groupBy(props.options, l => l.group!)
                .map(
                  group => (
                    <SelectGroup key={group.key}>
                      {
                        group.key &&
                        <SelectLabel asChild={!!props.renderGroup}>
                          {props.renderGroup?.(group.key) ?? group.key}
                        </SelectLabel>
                      }
                      <ControlledSelectSelectItems
                        renderClassNameItem={props.renderClassNameItem}
                        options={group.items} />
                    </SelectGroup>
                  )
                )
            }
            {
              !props.group &&
              <SelectGroup>
                <ControlledSelectSelectItems
                  renderClassNameItem={props.renderClassNameItem}
                  options={props.options} />
              </SelectGroup>
            }
          </SelectContent>
        </Select>
      )
    } />
);

export const ControlledSelectSelectItems = ({ options, renderClassNameItem }: Pick<TProps, 'options' | 'renderClassNameItem'>) => (
  <>
    {
      options
        .map(
          (l, index) => (
            <SelectItem
              className={`cursor-pointer ${renderClassNameItem?.(l)}`}
              key={`${l.value}.${index}`}
              disabled={l.disabled}
              value={l.value as string}>
              {l.title}
            </SelectItem>
          )
        )
    }
  </>
);
