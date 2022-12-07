import {ScreenBaseProps} from '../types';
import {AppRoutes} from './app-routes';

// ***** MAIN STACK *****
export type MainStackNavigatorParams = {
  [AppRoutes.BootScreen]: undefined;

  // dev screen
  [AppRoutes.UIScreen]: undefined;
};

export type BootScreenProps = ScreenBaseProps<
  AppRoutes.BootScreen,
  MainStackNavigatorParams
>;

// ***** TOP TAB *****
export type TopTabNavigatorParams = {
  // [AppRoutes.NewPosts]: undefined;
  // [AppRoutes.PopularPosts]: undefined;
};

// export type PostParams = {
//   postId: number;
// };

// export type ChannelsAllScreenProps = CompositeScreenProps<
//   BottomTabScreenProps<TopTabNavigatorParams, AppRoutes.NewPosts>,
//   StackScreenProps<MainStackNavigatorParams>
// >;
// export type MoviesAllScreenProps = CompositeScreenProps<
//   BottomTabScreenProps<TopTabNavigatorParams, AppRoutes.PopularPosts>,
//   StackScreenProps<MainStackNavigatorParams>
// >;
