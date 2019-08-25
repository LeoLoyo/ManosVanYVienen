import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {fontFamily, colors} from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily,
    fontSize: 24,
    color: colors.octonary,
  },
});

const HeaderList = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${props.title} (${props.quantity})`}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="more-vertical" size={24} color={colors.octonary} />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderList;
