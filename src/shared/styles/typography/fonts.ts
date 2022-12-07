import {Platform} from 'react-native';

//@ts-ignore
const robotoBold = Platform.select({
  ios: () => {
    return {fontFamily: 'Roboto-Bold', fontWeight: '700'};
  },
  android: () => {
    return {fontFamily: 'Roboto-Bold'};
  },
})();
//@ts-ignore
const robotoRegular = Platform.select({
  ios: () => {
    return {fontFamily: 'Roboto-Regular', fontWeight: '400'};
  },
  android: () => {
    return {fontFamily: 'Roboto-Regular'};
  },
})();
//@ts-ignore
const robotoMedium = Platform.select({
  ios: () => {
    return {fontFamily: 'Roboto-Medium', fontWeight: '500'};
  },
  android: () => {
    return {fontFamily: 'Roboto-Medium'};
  },
})();

export default {robotoBold, robotoMedium, robotoRegular};
