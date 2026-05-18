export const groupBy = <T, K extends keyof any>(array: T[], keySelector: (item: T) => K) => {

  const dataGrouped = (
    array
      .reduce(
        (groups, item) => {
          const key = keySelector(item);
          (groups[key] ||= []).push(item);
          return groups;
        },
        {} as Record<K, T[]>
      )
  );

  const result = (
    Object
      .keys(dataGrouped)
      .map(
        key => ({
          items: (dataGrouped as any)[key] as T[],
          key: key as K
        })
      )
  );

  return result;

};
