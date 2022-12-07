import {PixelRatio} from 'react-native';

import {sizes} from '../styles/sizes';

const scale = sizes.device.width / 1920;

export const normalizeToScreenSize = (value: number) =>
  Math.round(PixelRatio.roundToNearestPixel(scale * value));

export const vh = (size: number) => {
  return sizes.screen.height * (size / 100);
};

export const vw = (size: number) => {
  return sizes.screen.width * (size / 100);
};
