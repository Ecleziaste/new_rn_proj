import {StyleSheet} from 'react-native';
import {colors} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils';

export const styles = StyleSheet.create({
  root: {
    borderWidth: normalizeToScreenSize(2),
    borderColor: 'transparent',
    borderRadius: normalizeToScreenSize(22),
  },
  rootFocused: {
    borderColor: colors.primary.white,
    ...colors.shadow,
  },
  inner: {
    width: normalizeToScreenSize(80),
    height: normalizeToScreenSize(40),
    borderRadius: normalizeToScreenSize(20),
    borderColor: colors.secondary.grayPurple,
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
    backgroundColor: colors.secondary.grayPurple,
  },
  pin: {
    width: normalizeToScreenSize(32),
    height: normalizeToScreenSize(32),
    backgroundColor: colors.primary.white,
    borderRadius: normalizeToScreenSize(16),
  },
});
