import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button} from '../components';
import {fontFamily, colors} from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  sectionTitle: {
    minHeight: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '20%',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: colors.primary,
    fontFamily,
  },
});

const AuthScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text style={styles.title}>Books For Every Taste</Text>
      </View>
      <Button
        name="Sign In"
        big
        fill
        onPress={() => props.navigation.navigate('SignIn')}
      />
      <Button
        name="Sign Up"
        big
        fill
        onPress={props.navigation.navigate('SignUp')}
      />
    </View>
  );
};
export default withNavigation(AuthScreen);
