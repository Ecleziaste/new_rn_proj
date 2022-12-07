import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {UIScreen} from '@screens';
import React, {FC} from 'react';
import {AppRoutes, NavigationService} from 'src/shared/navigation';
import {DEFAULT_SCREEN_OPTIONS} from './config';
import {MainStackNavigatorParams} from 'src/shared/navigation/navigator-params';

const Stack = createStackNavigator<MainStackNavigatorParams>();

export const MainStackNavigator: FC = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator initialRouteName={AppRoutes.BootScreen}>
        {/*<Stack.Screen*/}
        {/*  name={AppRoutes.BootScreen}*/}
        {/*  component={BootScreen.UI}*/}
        {/*  options={DEFAULT_SCREEN_OPTIONS}*/}
        {/*/>*/}
        <Stack.Screen
          name={AppRoutes.UIScreen}
          component={UIScreen.UI}
          options={DEFAULT_SCREEN_OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
