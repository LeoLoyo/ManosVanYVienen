import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput as TextInputNative} from 'react-native-gesture-handler';
import {fontFamily, colors} from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quinary,
    width: '100%',
    height: 56,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily,
  },
});

const TextInput = props => {
  const {IconLeft, IconRight, ...otherProps} = props;
  return (
    <View style={styles.container}>
      {IconLeft && <IconLeft />}
      <TextInputNative {...otherProps} />
      {IconRight && <IconRight />}
    </View>
  );
};
export default TextInput;
