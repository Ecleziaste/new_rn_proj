import {Settings} from '@entities';
import React, {FC, ReactNode, useLayoutEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {changeLanguage} from 'src/shared/i18n';

type I18nProviderProps = {
  children: ReactNode;
};

const I18nProvider: FC<I18nProviderProps> = ({children}) => {
  const [isInit, setIsInit] = useState(false);

  const appLang = useSelector(Settings.Model.selectors.appLang);

  useLayoutEffect(() => {
    const changeLangAsync = async () => {
      await changeLanguage(appLang);

      setIsInit(true);
    };

    changeLangAsync();
  }, [appLang]);

  return <>{isInit && children}</>;
};

export default I18nProvider;
