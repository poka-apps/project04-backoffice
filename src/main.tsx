import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { axios } from './config';
import { SWRConfig } from 'swr';
import { App } from './app';

import './assets/css/global.css';

const htmlElement = document.getElementById('root')!;
const reactNode = (
  <StrictMode>
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then(l => l.data),
        revalidateOnReconnect: true,
        revalidateOnFocus: true
      }}>
      <App />
    </SWRConfig>
  </StrictMode>
);

createRoot(htmlElement)
  .render(reactNode);
