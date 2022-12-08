import {StyleSheet} from 'react-native';
import {normalizeToScreenSize} from 'src/shared/utils';
import {theme} from 'src/shared/styles';

export default StyleSheet.create({
  root: {
    backgroundColor: theme.default.colors.primary.dark,
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
