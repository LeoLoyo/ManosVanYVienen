import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fontFamily, shadows} from '../utils/styles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    width: '50%',
    ...shadows,
  },
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    aspectRatio: 0.75,
    borderRadius: 10,
    alignItems: 'center',
  },
  content: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCategory: {
    color: colors.secondary,
    fontSize: 18,
    textAlign: 'center',
    fontFamily,
    paddingTop: 16,
    paddingHorizontal: 4,
  },
  image: {
    width: '60%',
    aspectRatio: 0.75,
    borderRadius: 5,
  },
});

export default ({item, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.titleCategory} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.content}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
