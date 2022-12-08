import {StyleSheet} from 'react-native';
import {normalizeToScreenSize} from 'src/shared/utils';
import {theme} from 'src/shared/styles';

export const styles = StyleSheet.create({
  root: {
    borderWidth: normalizeToScreenSize(2),
    borderColor: 'transparent',
    borderRadius: normalizeToScreenSize(22),
  },
  rootFocused: {
    borderColor: theme.default.colors.primary.white,
    ...theme.default.colors.shadow,
  },
  inner: {
    width: normalizeToScreenSize(80),
    height: normalizeToScreenSize(40),
    borderRadius: normalizeToScreenSize(20),
    borderColor: theme.default.colors.secondary.grayPurple,
    borderWidth: normalizeToScreenSize(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: normalizeToScreenSize(2),
    paddingRight: normalizeToScreenSize(2),
    backgroundColor: 'transparent',
  },
  innerChecked: {
    borderWidth: 0,
    justifyContent: 'flex-end',
    backgroundColor: theme.default.colors.secondary.grayPurple,
  },
  pin: {
    width: normalizeToScreenSize(32),
    height: normalizeToScreenSize(32),
    backgroundColor: theme.default.colors.primary.white,
    borderRadius: normalizeToScreenSize(16),
  },
});
