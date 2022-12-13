import { defineCustomElements } from '../loader';
import '../src/shared/css/global.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on.*|clicked' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
