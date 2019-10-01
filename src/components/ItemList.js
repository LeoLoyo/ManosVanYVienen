import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {fontFamilyRegular, colors, shadows} from '../utils/styles';

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 4,
    flex: 1,
    backgroundColor: 'white',
    ...shadows,
    borderRadius: 10,
    overflow: 'hidden',
  },
  containerImage: {
    backgroundColor: 'white',
    marginVertical: 8,
  },
  image: {
    height: 150,
    width: 200,
  },
  containerInfo: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 15,
    fontFamily: fontFamilyRegular,
    marginBottom: 8,
  },
  info: {
    fontSize: 12,
    fontFamily: fontFamilyRegular,
    color: colors.octonary,
    marginBottom: 8,
  },
  containerFeedBack: {
    flexDirection: 'row',
  },
});
export default ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.wrapper}>
      <View style={styles.containerImage}>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.info}>Por: {item.donator}</Text>
        <Text style={styles.info}>{item.place}</Text>
        <Text style={styles.info}>{item.request}</Text>
        <View style={styles.containerFeedBack}>
          <Text style={styles.info}>{item.likes} </Text>
          <Icon name="heart" size={12} color={'teal'} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
