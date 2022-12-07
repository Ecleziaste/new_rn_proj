import {StackNavigationOptions} from '@react-navigation/stack';

export const DEFAULT_SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: false,
};

export const MODAL_SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: false,
  headerLeft: () => null,
  gestureEnabled: false,
};
