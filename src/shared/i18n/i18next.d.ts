import {resources} from './lib';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ru';
    resources: typeof resources['ru'];
  }
}
