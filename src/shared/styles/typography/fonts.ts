import {Platform} from 'react-native';

const robotoBold = Platform.select({
  ios: () => {
    return {fontFamily: 'Roboto-Bold', fontWeight: '700'};
  },
  android: () => {
    return {fontFamily: 'Roboto-Bold'};
  },
  default: () => {
    return {fontFamily: 'Roboto-Bold', fontWeight: '700'};
  },
})();

const robotoMedium = Platform.select({
  ios: () => {
    return {fontFamily: 'Roboto-Medium', fontWeight: '500'};
  },
  android: () => {
    return {fontFamily: 'Roboto-Medium'};
  },
  default: () => {
    return {fontFamily: 'Roboto-Medium', fontWeight: '500'};
  },
})();

const robotoRegular = Platform.select({
  ios: () => {
    return {fontFamily: 'Roboto-Regular', fontWeight: '400'};
  },
  android: () => {
    return {fontFamily: 'Roboto-Regular'};
  },
  default: () => {
    return {fontFamily: 'Roboto-Regular', fontWeight: '400'};
  },
})();

export default {robotoBold, robotoMedium, robotoRegular};
