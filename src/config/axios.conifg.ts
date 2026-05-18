import { ENV } from '@/constants';
import axiosRoot from 'axios';

export const axios = axiosRoot.create({
  baseURL: ENV.baseApi,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'fr'
  }
});

axios
  .interceptors
  .request
  .use(
    config => {
      const token = localStorage.getItem('access_token')

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        } as any;
      }

      return config;
    },
    error => Promise.reject(error)
  );

axios
  .interceptors
  .response
  .use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        // appeler endpoint refresh
        // mettre à jour le token
        // relancer la requête originale
      }

      return Promise.reject(error)
    }
  );
