import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: normalizeToScreenSize(82),
    backgroundColor: colors.primary.red,
    borderRadius: normalizeToScreenSize(16),
  },
  rootFocused: {
    borderWidth: normalizeToScreenSize(4),
    borderColor: colors.primary.white,
    ...colors.shadow,
  },
  rootDisabled: {
    borderColor: colors.grayscale.dark,
    backgroundColor: colors.grayscale.dark,
  },
  text: {
    color: colors.primary.white,
    ...typography.title2_32,
  },
  textDisabled: {
    color: colors.secondary.grayPurple,
  },
  innerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: normalizeToScreenSize(18),
  },
});
