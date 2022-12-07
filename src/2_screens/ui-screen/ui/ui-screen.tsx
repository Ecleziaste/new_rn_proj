import {Layouts} from '@widgets';
import React, {FC, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Buttons, Inputs, Toggle} from 'src/shared/ui';
import {normalizeToScreenSize} from 'src/shared/utils';

export const UIScreen: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  console.log('=>(ui-screen.tsx:19) wtf');

  return (
    <Layouts.DefaultLayout
      customStyles={styles.layout}
      withHorizontalPadding
      withVerticalPadding>
      <ScrollView style={styles.root}>
        <KeyboardAwareScrollView>
          <View style={styles.inner}>
            <View style={styles.divider} />
            <Inputs.BaseInput
              style={styles.item}
              placeholder="Base input with label"
              label="Base"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.divider} />
            <Inputs.BaseInput
              style={styles.item}
              placeholder="Base input"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.divider} />
            <Inputs.BaseInput
              style={styles.item}
              placeholder="Base input with error"
              error="Some error"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.divider} />
            <Inputs.PasswordInput
              style={styles.item}
              placeholder="Password input with label"
              label="Password"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.divider} />
            <Inputs.PasswordInput
              style={styles.item}
              placeholder="Password input"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.divider} />
            <Inputs.PasswordInput
              style={styles.item}
              placeholder="Password input with error"
              error="Some error"
              value={inputValue}
              onChangeText={setInputValue}
            />
            <View style={styles.divider} />
            <Buttons.PrimaryButton
              style={styles.item}
              isLoading={isLoading}
              onPress={handlePress}>
              Primary
            </Buttons.PrimaryButton>
            <View style={styles.divider} />
            <Buttons.PrimaryButton
              style={styles.item}
              isDisabled
              onPress={handlePress}>
              Primary Disabled
            </Buttons.PrimaryButton>
            <View style={styles.divider} />
            <Buttons.SecondaryButton
              style={styles.item}
              isLoading={isLoading}
              onPress={handlePress}>
              Secondary
            </Buttons.SecondaryButton>
            <View style={styles.divider} />
            <Buttons.SecondaryButton
              style={styles.item}
              isDisabled
              onPress={handlePress}>
              Secondary Disabled
            </Buttons.SecondaryButton>
            <View style={styles.divider} />
            <Text>'Toggle'</Text>
            <Toggle
              style={styles.toggle}
              isChecked={checked}
              onToggle={setChecked}
            />
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Layouts.DefaultLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    alignItems: 'center',
  },
  root: {
    width: '100%',
  },
  inner: {
    width: '100%',
    alignItems: 'center',
  },
  divider: {
    height: normalizeToScreenSize(20),
  },
  toggle: {
    width: normalizeToScreenSize(84),
  },
  item: {
    width: '80%',
  },
});
