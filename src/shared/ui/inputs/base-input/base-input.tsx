import React, {ReactNode, useMemo, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  TargetedEvent,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {PARALLAX_DISABLE} from 'src/shared/constants';
import {colors} from 'src/shared/styles';
import {mergeRefs, normalizeToScreenSize} from 'src/shared/utils';

import {styles} from './base-input.styles';

export type BaseInputProps = Omit<TextInputProps, 'onFocus' | 'onBlur'> & {
  label?: string;
  error?: string;
  IconLeft?: ReactNode;
  IconRight?: ReactNode;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
};

export const BaseInput = React.forwardRef(
  (
    {
      label,
      error,
      IconLeft,
      IconRight,
      style,
      value,
      onChangeText,
      onFocus,
      onBlur,
      ...props
    }: BaseInputProps,
    ref: React.ForwardedRef<TextInput>,
  ) => {
    const inputRef = useRef<TextInput>(null);
    // const [inputValue, setInputValue] = useState(value);
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
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const inputWithIconStyles = useMemo(
      () => ({
        ...(!!IconLeft && {paddingLeft: normalizeToScreenSize(66)}),
      }),
      [IconLeft],
    );

    return (
      <View style={[styles.root, style]}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View
          style={[
            styles.inputWrapper,
            isFocused && styles.inputWrapperFocused,
            !!error && styles.inputWrapperWithError,
            inputWithIconStyles,
          ]}>
          {IconLeft && <View style={styles.iconLeftWrapper}>{IconLeft}</View>}
          <TouchableOpacity
            style={styles.touchableInputWrapper}
            tvParallaxProperties={PARALLAX_DISABLE}
            activeOpacity={1}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onPress={handlePress}>
            <TextInput
              {...props}
              style={[styles.input, isFocused && styles.inputFocused]}
              selectionColor={colors.secondary.grayPurple}
              placeholderTextColor={
                isFocused
                  ? colors.secondary.lightPurple
                  : colors.secondary.grayPurple
              }
              value={value}
              onChangeText={onChangeText}
              ref={mergeRefs([inputRef, ref])}
            />
          </TouchableOpacity>
          {IconRight && (
            <View style={styles.iconRightWrapper}>{IconRight}</View>
          )}
        </View>
        <Text style={styles.error}>{error || ' '}</Text>
      </View>
    );
  },
);
