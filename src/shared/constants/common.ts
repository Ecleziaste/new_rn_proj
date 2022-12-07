import {Platform} from 'react-native';
import Config from 'react-native-config';

export const {ENVIRONMENT, API_BASE_URL} = Config;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const TAB_BAR_HEIGHT = 165; // 48 - paddingVertical + 68 menu

export const ONLY_FOUR_NUMBER_REG_EXP = new RegExp('^[0-9]{4}$');

export const APP_LANGUAGES = {
  en: 'en',
  ru: 'ru',
};

export type APP_LANGUAGE_TYPE = keyof typeof APP_LANGUAGES;

export const PARALLAX_DISABLE = {enabled: false};
