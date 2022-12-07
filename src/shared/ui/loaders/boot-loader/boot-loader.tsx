import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {Animated, Image, Text, View} from 'react-native';

import {styles} from './boot-loader.styles';

export const BootLoader = () => {
  const {t} = useTranslation();
  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation.current, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyles = {
    transform: [
      {
        scale: animation.current.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.2, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.logoWrapper, animatedStyles]}>
        <Image
          style={styles.logo}
          source={require('src/shared/assets/images/logo.png')}
        />
      </Animated.View>

      <Text style={styles.text}>{t('ui.loaders.boot.text')}</Text>
    </View>
  );
};
