import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/styles';
const styles = StyleSheet.create({
  botton: {
    padding: 8,
  },
});

export default props => (
  <TouchableOpacity onPress={props.onPress} style={styles.botton}>
    <Icon name="arrow-back" size={35} color={colors.secondary} />
  </TouchableOpacity>
);
