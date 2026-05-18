export const buildUrl = (...paths: string[]) =>
  (paths ?? [])
    .map(
      (part, index) => {
        if (index === 0) {
          return part.replace(/\/+$/, '');
        }

        return part.replace(/^\/+|\/+$/g, '');
      }
    )
    .filter(Boolean)
    .join('/');
