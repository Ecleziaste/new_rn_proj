import {StyleSheet} from 'react-native';
import {IS_IOS} from 'src/shared/constants';
import {colors, typography} from 'src/shared/styles';
import {normalizeToScreenSize} from 'src/shared/utils/normalize-to-screen-size';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  inputWrapper: {
    width: '100%',
    height: normalizeToScreenSize(68),
    paddingLeft: normalizeToScreenSize(24),
    borderRadius: normalizeToScreenSize(50),
    borderWidth: normalizeToScreenSize(4),
    borderColor: '#0000',
    backgroundColor: colors.grayscale.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputWrapperFocused: {
    borderColor: colors.secondary.lightPurple,
    backgroundColor: colors.primary.dark,
    ...colors.shadow,
  },
  inputWrapperWithError: {
    borderColor: colors.primary.red,
    borderWidth: normalizeToScreenSize(1),
  },
  touchableInputWrapper: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    padding: 0,
    backgroundColor: IS_IOS
      ? colors.grayscale.darkWithOpacity
      : colors.grayscale.dark,
    borderRadius: normalizeToScreenSize(12),
    color: colors.primary.white,
    ...typography.regular3_29_input,
  },
  inputFocused: {
    backgroundColor: IS_IOS
      ? colors.primary.darkWithOpacity
      : colors.primary.dark,
  },
  label: {
    marginBottom: normalizeToScreenSize(8),
    color: colors.secondary.grayPurple,
    ...typography.regular2_24,
  },
  error: {
    marginTop: normalizeToScreenSize(8),
    color: colors.primary.red,
    ...typography.regular2_24,
  },
  iconLeftWrapper: {
    position: 'absolute',
    width: normalizeToScreenSize(66),
    height: normalizeToScreenSize(66),
    left: 0,
    top: -1,
    zIndex: 100,
  },
  iconRightWrapper: {
    zIndex: 100,
  },
});
