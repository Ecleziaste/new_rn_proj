import {useCallback, useState} from 'react';
import {NativeSyntheticEvent, TargetedEvent} from 'react-native';

type useFocusableConfig = {
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
};

export const useFocusable = (config?: useFocusableConfig) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = useCallback(
    (e: NativeSyntheticEvent<TargetedEvent>) => {
      setIsFocused(true);

      if (config?.onFocus) {
        config.onFocus(e);
      }
    },
    [config],
  );

  const blurHandler = useCallback(
    (e: NativeSyntheticEvent<TargetedEvent>) => {
      setIsFocused(false);

      if (config?.onBlur) {
        config.onBlur(e);
      }
    },
    [config],
  );

  return {focusHandler, blurHandler, isFocused};
};
