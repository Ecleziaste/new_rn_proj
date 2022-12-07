import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from 'src/shared/styles';

import {styles} from './circle-loader.styles';

export const CircleLoader = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color={colors.primary.white} />
    </View>
  );
};
