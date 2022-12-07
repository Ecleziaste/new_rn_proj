import {StyleSheet} from 'react-native';
import {colors} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils';

export const styles = StyleSheet.create({
  root: {
    width: normalizeToScreenSize(60),
    height: normalizeToScreenSize(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalizeToScreenSize(2),
  },
  rootFocused: {
    borderRadius: normalizeToScreenSize(50),
    borderColor: colors.secondary.lightPurple,
    borderWidth: normalizeToScreenSize(3),
    backgroundColor: colors.primary.dark,
    ...colors.shadow,
  },
});
