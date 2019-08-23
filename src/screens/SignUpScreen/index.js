import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text} from 'react-native';
import {Button, TextInput} from '../../components';
import styles from './styles';

const SignUpScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.containerForm}>
        <TextInput name="name" placeholder={'First & Last Name'} />
        <TextInput name="email" placeholder={'Email'} />
        <TextInput name="password" placeholder={'Password'} secureTextEntry />
        <View style={styles.containerForgot}>
          <Text>Forgotten Password?</Text>
        </View>
        <Button
          name="Sign Up"
          big
          onPress={() => props.navigation.navigate('Dashboard')}
        />
      </View>
    </View>
  );
};

export default withNavigation(SignUpScreen);
