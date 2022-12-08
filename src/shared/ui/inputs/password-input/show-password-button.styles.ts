import {StyleSheet} from 'react-native';
import {normalizeToScreenSize} from 'src/shared/utils';
import {theme} from 'src/shared/styles';

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
    borderColor: theme.default.colors.secondary.lightPurple,
    borderWidth: normalizeToScreenSize(3),
    backgroundColor: theme.default.colors.primary.dark,
    ...theme.default.colors.shadow,
  },
});
