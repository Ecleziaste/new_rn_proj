import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from './circle-loader.styles';
import {theme} from 'src/shared/styles';

export const CircleLoader = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator
        size="large"
        color={theme.default.colors.primary.white}
      />
    </View>
  );
};
