import type { IHasOpen, IHasOptValue, IHasText, IHasValue, ISelectOption } from '@/interfaces';
import { useEffect, useState, type ReactNode } from 'react';
import { CircleX } from 'lucide-react';
import { cn } from '@/functions';
import {
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
  ScrollArea,
  Checkbox,
  Button
} from '@/components/shadcn';

type TState = IHasValue<ISelectOption[]> & IHasOpen;

type TProps = IHasOptValue<string[]> & IHasText & {
  renderText?: (text: string, selectedOptions: ISelectOption[]) => ReactNode;
  onChange: (value: ISelectOption[]) => void;
  getValue?: (value: ISelectOption) => any;
  options: ISelectOption[];
  onReset?: () => void;
  disabled?: boolean;
};

const VARIABLES = {
  initState: {
    value: [],
    open: false
  } as TState
};

export const ButtonFilterOptions = ({ text, options, value, disabled, renderText, onChange, onReset, getValue }: TProps) => {

  const initState = ({
    ...VARIABLES.initState,
    value: options.filter(l => value?.includes(l.value as any))
  }) as TState;

  const [state, setState] = useState<TState>(initState);

  useEffect(() => setState(_ => initState), [value]);

  const hasValue = state.value.length !== 0;

  const handleOnClickMenuItem = (e: any, option: ISelectOption) => {
    e?.preventDefault();

    let value = [...state.value];

    if (value.some(l => l.value === option?.value)) {
      value = [...value].filter(l => l.value !== option.value);
    } else {
      value = [...value, option];
    }

    setState(l => ({ ...l, value }));
  };

  const handleOnClickButton = () =>
    setState(l => ({ ...l, open: !l.open }));

  const handleOnClickButtonApply = () => {
    setState(l => ({ ...l, open: false }));

    let outputValue = state.value;

    if (getValue) {
      outputValue = outputValue.map(l => ({ ...l, value: getValue(l) }));
    }

    onChange(outputValue);
  };

  const handleOnClickBtnReset = () => {
    // Reset value
    setState(VARIABLES.initState);
    // Apply filter
    onChange([]);
    // Reset
    onReset?.();
  };

  return (
    <div className='flex items-center my-auto'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn(
              'space-x-1 border border-dashed text-xs items-center cursor-pointer',
              hasValue && 'border-r-0 rounded-r-none'
            )}
            variant={hasValue ? 'secondary' : 'ghost'}
            onClick={handleOnClickButton}
            disabled={disabled}
            size={'sm'}>
            {
              renderText?.(text, state.value) ?? (
                <>
                  <span>
                    {text}
                  </span>
                  {
                    state.value.length !== 0 &&
                    <span className='text-red-800 font-semibold'>
                      ({state.value.length})
                    </span>
                  }
                </>
              )
            }
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-40' align='start'>
          <DropdownMenuGroup className='max-h-80 flex flex-col'>
            <ScrollArea className='flex-1 overflow-auto'>
              {
                options
                  .map(
                    item => (
                      <DropdownMenuItem
                        key={item.value as any}
                        onSelect={e => handleOnClickMenuItem(e, item)}
                        className='cursor-pointer'>
                        <Checkbox
                          checked={state.value.some(l => l.value === item.value)}
                          className='text-neutral-400' />
                        <span>
                          {item.title}
                        </span>
                      </DropdownMenuItem>
                    )
                  )
              }
            </ScrollArea>
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
