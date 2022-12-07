import {StyleSheet} from 'react-native';
import {colors} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.primary.dark,
    flex: 1,
    flexDirection: 'column',
  },
  withHorizontalPadding: {
    paddingHorizontal: 16,
  },
  withVerticalPadding: {
    paddingVertical: 32,
  },
  logoWrapper: {
    width: normalizeToScreenSize(105),
    height: normalizeToScreenSize(105),
    position: 'absolute',
    left: normalizeToScreenSize(100),
    top: normalizeToScreenSize(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: normalizeToScreenSize(80),
    height: normalizeToScreenSize(80),
  },
});
