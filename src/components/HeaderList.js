import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors, fontFamilyBold} from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamilyBold,
    fontSize: 24,
    color: colors.tertiary,
  },
});

const HeaderList = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="more-vertical" size={24} color={colors.tertiary} />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderList;
