import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, fontFamilyBold, fontFamilyRegular} from '../utils/styles';
import Button from './Button';

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    flexDirection: 'row',
    borderBottomColor: '#f6f8fa',
    borderBottomWidth: 1,
  },
  containerInfo: {
    flex: 1,
    padding: 4,
  },
  wrapperDescription: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: fontFamilyRegular,
    fontSize: 16,
  },
  request: {
    fontSize: 12,
    fontFamily: fontFamilyRegular,
    color: colors.octonary,
  },
  place: {
    fontSize: 14,
    fontFamily: fontFamilyRegular,
    marginLeft: 4,
    color: colors.octonary,
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamilyRegular,
    color: colors.octonary,
  },
  containerPlace: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerActions: {
    paddingTop: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttons: {
    width: '45%',
  },
  containerImage: {
    width: '50%',
    padding: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 10,
  },
  containerLikes: {
    position: 'absolute',
    top: 8,
    right: 4,
  },
  likes: {
    color: colors.tertiary,
    fontSize: 10,
  },
});

export default ({item, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.containerImage}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.containerLikes}>
          <Text style={styles.likes}>
            {item.likes}
            <IconEntypo
              name={item.like ? 'heart' : 'heart-outlined'}
              size={10}
              color={colors.tertiary}
            />
          </Text>
        </View>
        <View style={styles.containerPlace}>
          <Icon name="map-pin" size={14} color={colors.primary} />
          <Text style={styles.place} numberOfLines={1}>
            {item.place}
          </Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.wrapperDescription}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={1}>
            Por: {item.donator}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.request} numberOfLines={1}>
            {item.request}
          </Text>
          <View style={styles.containerActions}>
            <Button
              name="Solicitar"
              shadow
              fill
              style={styles.buttons}
              onPress={onPress}
            />
            <Button
              name="Me Gusta"
              shadow
              fill
              style={styles.buttons}
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
