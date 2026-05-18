'use client';

import { Input, type TInputProps } from '../shadcn';
import type { IHookFormProps } from '@/interfaces';
import { Controller } from 'react-hook-form';
import { EMPTY_STRING } from '@/constants';
import { cn } from '@/functions';

export type TControlledInputProps = TInputProps & IHookFormProps;

export const ControlledInput = (props: TControlledInputProps) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    defaultValue={props.defaultValue || EMPTY_STRING}
    render={
      ({ field: { name: fieldName, onChange, onBlur, value }, fieldState: { error } }) => (
        <Input
          {...props}
          className={cn(
            'rounded-xs border p-2.5 py-4.5 text-sm cursor-pointer appearance-none border-neutral-400',
            props?.className,
            error && 'border-red-500 focus-visible:ring-transparent'
          )}
          title={
            error
              ? error.message
              : props.title
          }
          maxLength={props?.maxLength ?? 300}
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
    }
  />
);
