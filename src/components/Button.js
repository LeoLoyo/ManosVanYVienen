import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {buttons, fonts} from '../utils/styles';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
  },
});

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        props.shadow && buttons.shadow,
        props.fill ? buttons.fill : buttons.outLine,
        props.big ? buttons.big : buttons.small,
      ]}>
      <Text
        style={[
          styles.name,
          props.fill ? fonts.colors.secondary : fonts.colors.primary,
          props.big ? fonts.md : buttons.sm,
        ]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
