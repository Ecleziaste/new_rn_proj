import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TargetedEvent,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {PARALLAX_DISABLE} from 'src/shared/constants';

import {styles} from './toggle.styles';

type ToggleProps = TouchableOpacityProps & {
  isChecked: boolean;
  onToggle?: (value: boolean) => void;
};

export const Toggle = ({
  isChecked,
  onToggle,
  style,
  onFocus,
  onBlur,
  ...props
}: ToggleProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TargetedEvent>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const handlePress = () => {
    onToggle && onToggle(!isChecked);
  };

  return (
    <TouchableOpacity
      tvParallaxProperties={PARALLAX_DISABLE}
      {...props}
      activeOpacity={1}
      style={[styles.root, isFocused && styles.rootFocused, style]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPress={handlePress}>
      <View style={[styles.inner, isChecked && styles.innerChecked]}>
        <View style={styles.pin} />
      </View>
    </TouchableOpacity>
  );
};
