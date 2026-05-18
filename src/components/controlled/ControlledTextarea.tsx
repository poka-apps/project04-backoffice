'use client';

import { Textarea, type TTextareaProps } from '../shadcn';
import type { IHookFormProps } from '@/interfaces';
import { Controller } from 'react-hook-form';
import { EMPTY_STRING } from '@/constants';
import { cn } from '@/functions';

type TProps = IHookFormProps & TTextareaProps;

export const ControlledTextarea = (props: TProps) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    defaultValue={props.defaultValue || EMPTY_STRING}
    render={
      ({ field: { name: fieldName, onChange, onBlur, value }, fieldState: { error } }) => (
        <Textarea
          {...props}
          className={cn(
            'rounded-xs border text-neutral-500 cursor-pointer appearance-none border-neutral-400',
            props?.className,
            error && 'border-red-500 focus-visible:ring-transparent'
          )}
          title={
            error
              ? error.message
              : props.title
          }
          name={fieldName}
          onChange={
            e => {
              props.onChange?.(e);
              onChange(e);
            }
          }
          value={value ?? EMPTY_STRING}
          onBlur={
            e => {
              props.onBlur?.(e);
              onBlur();
            }
          } />
      )
    } />
);
