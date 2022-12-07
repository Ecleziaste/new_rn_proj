import React, {ForwardedRef, ReactNode, forwardRef, useState} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {PARALLAX_DISABLE} from 'src/shared/constants';
import {colors} from 'src/shared/styles';

import {styles} from './primary.styles';

type PrimaryButtonProps = Omit<
  TouchableOpacityProps,
  'children' | 'disabled'
> & {
  children: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const PrimaryButton = forwardRef(
  (
    {
      children,
      icon,
      isDisabled = false,
      isLoading = false,
      onPress,
      onFocus,
      onBlur,
      style,
      ...props
    }: PrimaryButtonProps,
    ref: ForwardedRef<TouchableOpacity>,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: NativeSyntheticEvent<TargetedEvent>) => {
      setIsFocused(true);
      onFocus && onFocus(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TargetedEvent>) => {
      setIsFocused(false);
      onBlur && onBlur(e);
    };

    const handlePress = (e: GestureResponderEvent) => {
      if (!isLoading) {
        onPress && onPress(e);
      }
    };

    return isDisabled ? (
      <View
        {...props}
        style={[
          styles.root,
          isFocused && styles.rootFocused,
          isDisabled && styles.rootDisabled,
          style,
        ]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.primary.white} />
        ) : (
          <View style={styles.innerWrap}>
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            <Text style={[styles.text, isDisabled && styles.textDisabled]}>
              {children}
            </Text>
          </View>
        )}
      </View>
    ) : (
      <TouchableOpacity
        tvParallaxProperties={PARALLAX_DISABLE}
        {...props}
        ref={ref}
        activeOpacity={1}
        style={[
          styles.root,
          isFocused && styles.rootFocused,
          isDisabled && styles.rootDisabled,
          style,
        ]}
        onFocus={handleFocus}
        disabled={isDisabled}
        onBlur={handleBlur}
        onPress={handlePress}>
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.primary.white} />
        ) : (
          <View style={styles.innerWrap}>
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            <Text style={[styles.text, isDisabled && styles.textDisabled]}>
              {children}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

export default PrimaryButton;
