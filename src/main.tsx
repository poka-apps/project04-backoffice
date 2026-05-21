import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app';

import './assets/css/global.css';

const htmlElement = document.getElementById('root')!;
const reactNode = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(htmlElement)
  .render(reactNode);
