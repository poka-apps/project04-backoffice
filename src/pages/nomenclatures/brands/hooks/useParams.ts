import { useQueryGetNomenclatures } from '@/hooks/queries';
import type { TItemType } from '@/types';
import type { TTabname } from '../types';
import { useQueryParams } from '@/hooks';

export const useParams = () => {

  const { nomenclatures } = useQueryGetNomenclatures({ type: 'itemTypes' });
  const {
    values: [itemType, tab, brandId],
    setValue
  } = useQueryParams({
    names: ['itemType', 'tab', 'brandId'],
    defaultValue: {
      itemType: 'car',
      tab: 'brands'
    }
  });

  return ({
    setItemType: (newValue: TItemType) => setValue('itemType', newValue),
    setTab: (newValue: TTabname) => setValue('tab', newValue),

    itemTypeTitle: nomenclatures.find(l => l.id === itemType)?.title,
    itemType: itemType as TItemType,
    tab: tab as TTabname,
    brandId
  });

};
