import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/styles';
import {SafeAreaView} from 'react-navigation';
import { TitleScreen } from '.';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: 8,
  },
});

export default props => {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={
            props.dashboard
              ? props.navigation.toggleDrawer
              : props.navigation.pop
          }>
          {props.dashboard ? (
            <Icon name="menu" size={35} color={colors.secondary} />
          ) : (
            <Icon name="arrow-back" size={35} color={colors.secondary} />
          )}
        </TouchableOpacity>
        {props.title && <TitleScreen title={props.title} />}
        <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
          <Icon name="search" size={35} color={colors.secondary} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
