import type { IHasBrandId, IHasItemType } from '@/interfaces';
import { useQueryGetBrands } from './useQueryGetBrands';

export const useQueryGetBrand = ({ itemType, brandId }: IHasItemType & IHasBrandId) => {

  const { brands, isLoading, error, refresh } = useQueryGetBrands({ itemType });

  return ({
    brand: brands.find(l => l.id === brandId) ?? null,
    isLoading,
    refresh,
    error
  });

};
