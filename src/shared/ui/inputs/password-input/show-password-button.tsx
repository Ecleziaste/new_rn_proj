import React, {useState} from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {PARALLAX_DISABLE} from 'src/shared/constants';
import {EyeIcon, EyeSlashIcon} from 'src/shared/ui/icons';
import {normalizeToScreenSize} from 'src/shared/utils';

import {styles} from './show-password-button.styles';

type ShowPasswordButtonProps = TouchableOpacityProps & {
  style?: StyleProp<ViewStyle>;
  isChecked: boolean;
  onToggle: (value: boolean) => void;
};

export const ShowPasswordButton = React.forwardRef(
  (
    {style, isChecked, onToggle, ...props}: ShowPasswordButtonProps,
    ref?: React.ForwardedRef<TouchableOpacity>,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <TouchableOpacity
        tvParallaxProperties={PARALLAX_DISABLE}
        {...props}
        ref={ref}
        activeOpacity={1}
        style={[styles.root, isFocused && styles.rootFocused, style]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onPress={() => onToggle(!isChecked)}>
        {isChecked ? (
          <EyeSlashIcon
            width={normalizeToScreenSize(40)}
            height={normalizeToScreenSize(40)}
          />
        ) : (
          <EyeIcon
            width={normalizeToScreenSize(40)}
            height={normalizeToScreenSize(40)}
          />
        )}
      </TouchableOpacity>
    );
  },
);
