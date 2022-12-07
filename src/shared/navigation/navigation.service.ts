import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import React from 'react';

import {AppRoutes} from './app-routes';
import {MainStackNavigatorParams as ParamList} from './navigator-params';

export const NavigationService = {
  navigationRef: React.createRef<NavigationContainerRef<ParamList>>(),

  navigate<RouteName extends keyof ParamList>(
    ...args: undefined extends ParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]]
      : [screen: RouteName, params: ParamList[RouteName]]
  ) {
    // @ts-ignore
    this.navigationRef.current?.navigate(...args);
  },
  reset(routes: {name: AppRoutes}[], index = 0) {
    this.navigationRef.current?.reset({index, routes});
  },
  replace<RouteName extends keyof ParamList>(
    ...args: undefined extends ParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]]
      : [screen: RouteName, params: ParamList[RouteName]]
  ) {
    // @ts-ignore
    this.navigationRef.current?.dispatch(StackActions.replace(...args));
  },
};
