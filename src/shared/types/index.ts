import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenBaseProps<
  PageName extends string,
  NavigatorParams extends ParamListBase,
> = {
  navigation: StackNavigationProp<NavigatorParams, PageName>;
  route: RouteProp<NavigatorParams, PageName>;
};

export type Option = {
  key: string;
  value: string;
  count?: number;
};
