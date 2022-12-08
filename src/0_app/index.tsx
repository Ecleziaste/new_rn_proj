import 'react-native-gesture-handler';
import 'src/shared/i18n';
import 'react-native-url-polyfill/auto';

import {Navigation} from '@processes';
import React from 'react';
import {LogBox} from 'react-native';

import * as Providers from './providers';
import {ApolloProvider} from '@apollo/client';
import client from 'src/0_app/apollo/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const global: {HermesInternal: null | {}};

if (__DEV__) {
  const ignoreWarns = [
    'ViewPropTypes will be removed from React Native',
    'The native module for Flipper seems unavailable',
  ];

  LogBox.ignoreLogs(ignoreWarns);
}

const App = () => {
  return (
    //TODO:
    // <ThemeProvider value={theme.default}>
    <ApolloProvider client={client}>
      <Providers.Redux>
        <Providers.I18nProvider>
          <Navigation.MainStackNavigator />
        </Providers.I18nProvider>
      </Providers.Redux>
    </ApolloProvider>
    // </ThemeProvider>
  );
};

export default App;
