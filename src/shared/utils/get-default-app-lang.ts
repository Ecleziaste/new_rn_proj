import {NativeModules} from 'react-native';
import {
  APP_LANGUAGE_TYPE,
  APP_LANGUAGES,
  IS_ANDROID,
  IS_IOS,
} from 'src/shared/constants';

export const getDefaultAppLang = () => {
  let locale = 'ru';

  if (IS_IOS) {
    locale =
      NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0];
  }

  if (IS_ANDROID) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  return (
    Object.keys(APP_LANGUAGES).includes(locale.substring(0, 2))
      ? locale.substring(0, 2)
      : APP_LANGUAGES.ru
  ) as APP_LANGUAGE_TYPE;
};
