import type { Control, RegisterOptions, UseFormSetValue } from 'react-hook-form';
import type { IHasName, IHasOptDefaultValue } from './has.interface';

export interface IHookFormProps extends IHasName, IHasOptDefaultValue {
  setValue?: UseFormSetValue<any>;
  rules?: RegisterOptions;
  control: Control<any>;
}
