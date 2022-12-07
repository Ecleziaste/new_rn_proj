import {StyleSheet} from 'react-native';
import {colors, typography} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary.dark,
  },
  logoWrapper: {
    width: normalizeToScreenSize(368),
    height: normalizeToScreenSize(368),
    marginBottom: normalizeToScreenSize(60),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    color: colors.primary.white,
    ...typography.regular4_32,
  },
});
