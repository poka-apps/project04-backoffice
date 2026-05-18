import type { TEnvironmentName } from '@/types';

export const ENV = {
  name: import.meta.env.VITE_ENVIRONMENT_NAME as TEnvironmentName,
  baseApi: import.meta.env.VITE_BASE_API as string,
};
