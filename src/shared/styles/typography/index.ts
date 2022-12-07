import {normalizeToScreenSize} from 'src/shared/utils/normalize-to-screen-size';

import fonts from './fonts';

export const typography = {
  title1_64: {
    fontSize: normalizeToScreenSize(64),
    lineHeight: normalizeToScreenSize(88),
    letterSpacing: 0.012,
    ...fonts.robotoBold,
  },
  title2_32: {
    fontSize: normalizeToScreenSize(32),
    lineHeight: normalizeToScreenSize(38),
    letterSpacing: 0.012,
    ...fonts.robotoBold,
  },
  title3_24: {
    fontSize: normalizeToScreenSize(24),
    lineHeight: normalizeToScreenSize(32),
    letterSpacing: 0.012,
    ...fonts.robotoMedium,
  },
  title3_24Bold: {
    fontSize: normalizeToScreenSize(24),
    lineHeight: normalizeToScreenSize(32),
    letterSpacing: 0.012,
    ...fonts.robotoBold,
  },
  regular1_20: {
    fontSize: normalizeToScreenSize(20),
    lineHeight: normalizeToScreenSize(27),
    letterSpacing: 0.012,
    ...fonts.robotoRegular,
  },
  regular2_24: {
    fontSize: normalizeToScreenSize(24),
    lineHeight: normalizeToScreenSize(32),
    letterSpacing: 0.012,
    ...fonts.robotoRegular,
  },
  regular3_29: {
    fontSize: normalizeToScreenSize(29),
    lineHeight: normalizeToScreenSize(40),
    letterSpacing: 0.012,
    ...fonts.robotoRegular,
  },
  regular3_29_input: {
    fontSize: normalizeToScreenSize(29),
    letterSpacing: 0.012,
    ...fonts.robotoRegular,
  },
  regular4_32: {
    fontSize: normalizeToScreenSize(32),
    lineHeight: normalizeToScreenSize(50),
    letterSpacing: 0.012,
    ...fonts.robotoRegular,
  },
  regular5_47: {
    fontSize: normalizeToScreenSize(47),
    lineHeight: normalizeToScreenSize(64),
    letterSpacing: 0.012,
    ...fonts.robotoRegular,
  },
  medium1_20: {
    fontSize: normalizeToScreenSize(20),
    lineHeight: normalizeToScreenSize(27),
    letterSpacing: 0.012,
    ...fonts.robotoMedium,
  },
  medium2_29: {
    fontSize: normalizeToScreenSize(29),
    lineHeight: normalizeToScreenSize(40),
    letterSpacing: 0.012,
    ...fonts.robotoMedium,
  },
  medium3_30: {
    fontSize: normalizeToScreenSize(30),
    lineHeight: normalizeToScreenSize(40),
    letterSpacing: 0.012,
    ...fonts.robotoMedium,
  },
  medium4_16: {
    fontSize: normalizeToScreenSize(16),
    lineHeight: normalizeToScreenSize(22),
    letterSpacing: 0.012,
    ...fonts.robotoMedium,
  },
  bold_24: {
    fontSize: normalizeToScreenSize(24),
    lineHeight: normalizeToScreenSize(32),
    letterSpacing: 0.012,
    ...fonts.robotoBold,
  },
};
