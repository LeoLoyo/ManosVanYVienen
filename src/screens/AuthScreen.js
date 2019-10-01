import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button} from '../components';
import {fontFamilyRegular, colors} from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  sectionTitle: {
    minHeight: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperLogo: {
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.tertiary,
    fontFamily: fontFamilyRegular,
  },
  separator: {
    marginVertical: 10,
    textAlign: 'center',
    width: '100%',
  },
  facebook: {
    backgroundColor: '#3C5A99',
  },
  google: {
    backgroundColor: '#DB4437',
  },
});

const AuthScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <View style={styles.wrapperLogo}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Ingresa con tus redes sociales</Text>
      </View>
      <Button
        name="Conectarse con Facebook"
        icon="facebook"
        big
        fill
        onPress={() => props.navigation.navigate('SignIn')}
        style={styles.facebook}
      />
      <Button
        name="Conectarse con Google"
        icon="google"
        big
        fill
        onPress={() => props.navigation.navigate('SignUp')}
        style={styles.google}
      />
      <Text style={styles.separator}>O</Text>
      <Button
        name="Saltar"
        big
        onPress={() => props.navigation.navigate('Dashboard')}
      />
    </View>
  );
};
export default withNavigation(AuthScreen);
