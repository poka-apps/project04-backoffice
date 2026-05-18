import type { IHasOpen, IHasOptValue, ISelectOption } from '@/interfaces';
import { useEffect, useState } from 'react';
import type { TNullable } from '@/types';
import { CircleX } from 'lucide-react';
import {
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
  ScrollArea,
  Button
} from '@/components/shadcn';

type TState<TValue = string> = IHasOptValue<ISelectOption<any, TValue>> & IHasOpen;

type TProps<TValue = string> = IHasOptValue<TNullable<TValue>> & {
  onChange: (value?: ISelectOption<any, TValue>) => void;
  options: ISelectOption<any, TValue>[];
  onReset?: () => void;
  notCloseable?: boolean;
  disabled?: boolean;
  text: string;
};

export const ButtonFilterRadioGroup = <TValue = string>({ text, options, value, disabled, notCloseable, onChange, onReset }: TProps<TValue>) => {

  const [state, setState] = useState<TState<TValue>>({ open: false });

  useEffect(
    () => setState({ ...{ open: false }, value: options.find(l => l.value === value) }),
    [value, options]
  );

  const hasValue = !!state.value;

  const handleOnClickButton = () =>
    setState(l => ({ ...l, open: !l.open }));

  const handleOnClickButtonApply = () => {
    setState(l => ({ ...l, open: false }));
    onChange(state.value);
  };

  const handleOnValueChange = (optionValue: string) => {
    const value = options.find(l => l.value === optionValue);
    setState(l => ({ ...l, value }));
  };

  const handleOnClickBtnReset = () => {
    // Reset value
    setState({ open: false });
    // Apply filter
    onChange();
    // Reset
    onReset?.();
  };

  const handleOnClickMenuItem = (e: any) =>
    e.preventDefault();

  return (
    <div className='flex items-center my-auto'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={`border border-dashed text-xs items-center cursor-pointer ${!notCloseable && hasValue && 'border-r-0 rounded-r-none'}`}
            variant={hasValue ? 'secondary' : 'ghost'}
            onClick={handleOnClickButton}
            disabled={disabled}
            size={'sm'}>
            <span>
              {text}
            </span>
            {
              hasValue &&
              <>
                <span>:</span>
                <span className='text-red-800 font-semibold ml-1'>
                  {state.value!.title}
                </span>
              </>
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-40' align='start'>
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup
              value={state.value?.value as any}
              className='max-h-80 flex flex-col'
              onValueChange={handleOnValueChange}>
              <ScrollArea className='flex-1 overflow-auto'>
                {
                  options
                    .map(
                      item => (
                        <DropdownMenuRadioItem
                          key={item.value as any}
                          value={item.value as any}
                          onSelect={handleOnClickMenuItem}
                          className='cursor-pointer'>
                          {item.title}
                        </DropdownMenuRadioItem>
                      )
                    )
                }
              </ScrollArea>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='p-0'>
              <Button
                className='w-full h-8 m-0 p-0 text-xs cursor-pointer'
                onClick={handleOnClickButtonApply}
                variant={'default'}
                size={'sm'}>
                Appliquer
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {
        !notCloseable &&
        hasValue &&
        <Button
          className='space-x-1 border border-dashed border-l-0 rounded-l-none text-xs'
          variant={hasValue ? 'secondary' : 'ghost'}
          title='Supprimer le filtre'
          onClick={handleOnClickBtnReset}
          disabled={disabled}
          size={'sm'}>
          <CircleX size={16} />
        </Button>
      }
    </div>
  );

};
