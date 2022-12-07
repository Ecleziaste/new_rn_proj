import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity, findNodeHandle} from 'react-native';
import {BaseInput, BaseInputProps} from 'src/shared/ui/inputs/base-input';

import {ShowPasswordButton} from './show-password-button';

export const PasswordInput = React.forwardRef(
  (props: BaseInputProps, ref: React.ForwardedRef<TextInput>) => {
    const showPasswordButtonRef = useRef<TouchableOpacity>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <BaseInput
        {...props}
        ref={ref}
        secureTextEntry={!isPasswordVisible}
        IconRight={
          <ShowPasswordButton
            hasTVPreferredFocus
            // @ts-ignore
            nextFocusRight={findNodeHandle(showPasswordButtonRef.current)}
            ref={showPasswordButtonRef}
            isChecked={isPasswordVisible}
            onToggle={setIsPasswordVisible}
          />
        }
      />
    );
  },
);
