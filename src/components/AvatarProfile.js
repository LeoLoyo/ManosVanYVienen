import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
});

const AvatarProfile = props => (
  <View>
    <Image
      source={require('../../assets/images/profile.png')}
      style={[styles.avatar, props.style]}
    />
  </View>
);

export default AvatarProfile;
