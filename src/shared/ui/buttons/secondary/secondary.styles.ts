import {StyleSheet} from 'react-native';
import {theme, typography} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: normalizeToScreenSize(82),
    backgroundColor: theme.default.colors.primary.white,
    borderRadius: normalizeToScreenSize(16),
  },
  rootFocused: {
    borderWidth: normalizeToScreenSize(4),
    borderColor: theme.default.colors.primary.red,
    ...theme.default.colors.shadow,
  },
  rootDisabled: {
    borderWidth: normalizeToScreenSize(4),
    borderColor: theme.default.colors.grayscale.dark,
    backgroundColor: theme.default.colors.grayscale.dark,
  },
  text: {
    color: theme.default.colors.primary.red,
    ...typography.title2_32,
  },
  textDisabled: {
    color: theme.default.colors.secondary.grayPurple,
  },
  innerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: normalizeToScreenSize(18),
  },
});
