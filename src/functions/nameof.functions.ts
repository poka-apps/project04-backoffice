type PropertyPath<T, Prev extends string = ''> = {
  [K in keyof T]: T[K] extends object
  ? T[K] extends Array<any> // éviter les tableaux
  ? `${Prev}${K & string}`
  : | `${Prev}${K & string}`
  | PropertyPath<T[K], `${Prev}${K & string}.`>
  : `${Prev}${K & string}`
}[keyof T];

export const nameof = <T>(propertyPath: PropertyPath<T>) => propertyPath as string;
