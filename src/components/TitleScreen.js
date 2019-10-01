import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../utils/styles';

const styles = StyleSheet.create({
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: fonts.lg,
});

const TitleScreen = props => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}> {props.title} </Text>
    </View>
  );
};

export default TitleScreen;
