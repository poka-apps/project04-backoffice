'use client';

import { Checkbox, type TCheckboxProps } from '../shadcn';
import type { IHookFormProps } from '@/interfaces';
import { Controller } from 'react-hook-form';
import { EMPTY_STRING } from '@/constants';

export type TControlledCheckboxProps = TCheckboxProps & IHookFormProps;

export const ControlledCheckbox = (props: TControlledCheckboxProps) => (
  <Controller
    name={props.name}
    control={props.control}
    rules={props.rules}
    defaultValue={props.defaultValue || EMPTY_STRING}
    render={
      ({ field: { name: fieldName, onChange, value }, fieldState: { error } }) => (
        <Checkbox
          {...props}
          className={props?.className}
          title={
            error
              ? error.message
              : props.title
          }
          name={fieldName}
          onCheckedChange={
            checked => {
              props.onCheckedChange?.(checked);
              onChange(checked);
            }
          }
          checked={value} />
      )
    }
  />
);
