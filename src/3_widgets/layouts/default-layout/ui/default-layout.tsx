import React, {FC} from 'react';
import {Image, View, ViewStyle} from 'react-native';

import styles from './styles';

type DefaultLayoutProps = {
  children: React.ReactNode;
  withHorizontalPadding?: boolean;
  withVerticalPadding?: boolean;
  withLogo?: boolean;
  customStyles?: ViewStyle;
};

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  withHorizontalPadding = true,
  withVerticalPadding = false,
  withLogo = false,
  customStyles,
}) => {
  return (
    <View
      style={[
        styles.root,
        withHorizontalPadding && styles.withHorizontalPadding,
        withVerticalPadding && styles.withVerticalPadding,
        customStyles,
      ]}>
      {withLogo && (
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('src/shared/assets/images/logo.png')}
          />
        </View>
      )}
      {children}
    </View>
  );
};
