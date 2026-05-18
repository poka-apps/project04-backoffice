import { Separator, Tabs, TabsList, TabsTrigger } from '@/components/shadcn';
import { useQueryGetBrand, useQueryGetNomenclatures } from '@/hooks/queries';
import { ButtonFilterRadioGroup } from '@/components';
import type { TTabname } from '../types';
import type { TItemType } from '@/types';
import { useParams } from '../hooks';

export const Header = () => {

  const { nomenclatures } = useQueryGetNomenclatures<TItemType>({ type: 'itemTypes' });
  const { itemType, tab, brandId, setItemType, setTab } = useParams();
  const { brand } = useQueryGetBrand({ itemType, brandId: brandId! });

  const handleOnValueChange = (newTab: string) =>
    setTab(newTab as TTabname);

  return (
    <div className='flex flex-col gap-2'>
      <div>
        <ButtonFilterRadioGroup<TItemType>
          options={nomenclatures.map(l => ({ title: l.title, value: l.id }))}
          onChange={option => option?.value && setItemType(option.value)}
          value={itemType}
          text='Type'
          notCloseable />
      </div>
      <Separator className='opacity-60' />
      <Tabs
        value={tab}
        onValueChange={handleOnValueChange}>
        <TabsList>
          <TabsTrigger
            className='cursor-pointer'
            value={('brands' as TTabname)}>
            Marques
          </TabsTrigger>
          <TabsTrigger
            className='flex space-x-1 cursor-pointer'
            value={('models' as TTabname)}
            disabled={!brandId}>
            <span>
              Modèles
            </span>
            {
              brand?.title &&
              <span>:</span>
            }
            <span className='text-red-800 font-semibold ml-1'>
              {brand?.title}
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );

};
