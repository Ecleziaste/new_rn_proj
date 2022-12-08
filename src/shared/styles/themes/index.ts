import {typography} from 'src/shared/styles/typography';
import {colors} from 'src/shared/styles/themes/dark/colors';

export const theme = {
  default: {
    colors,
    typography,
  },
};

export type ThemeType = typeof theme.default;
