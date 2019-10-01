import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fontFamilyBold, shadows} from '../utils/styles';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 4,
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.octonary,
    width: 240,
    aspectRatio: 1,
    ...shadows,
  },
  containerImage: {
    justifyContent: 'center',
    width: '100%',
    flex: 5,
  },
  content: {
    backgroundColor: 'gray',
    alignSelf: 'center',
    aspectRatio: 1,
    height: '90%',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: '100%',
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: fontFamilyBold,
    color: colors.secondary,
  },
});
export default ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.wrapper,
        item.backgroundColor && {backgroundColor: item.backgroundColor},
      ]}>
      <Fragment>
        <View style={styles.containerImage}>
          <View style={styles.content}>
            <Image
              source={{uri: item.image}}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Fragment>
    </TouchableOpacity>
  );
};
