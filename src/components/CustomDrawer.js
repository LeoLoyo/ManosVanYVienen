import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {colors, fontFamilyBold} from '../utils/styles';
import {Screen} from '.';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: '20%',
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    // backgroundColor: colors.octonary,
    backgroundColor: colors.secondary,
  },
  containerLogo: {
    padding: 16,
    // width: '50%',
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  containerUser: {
    padding: 8,
  },
  nameUser: {
    fontSize: 20,
    fontFamily: fontFamilyBold,
    color: colors.septenary,
    marginBottom: 16,
  },
  drawerItemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  drawerItemTitle: {
    fontFamily: fontFamilyBold,
    fontSize: 20,
    color: colors.octonary,
  },
});
const DrawerItem = props => (
  <TouchableOpacity onPress={() => props.navigate(props.link)}>
    <View style={styles.drawerItemContainer}>
      <Text style={styles.drawerItemTitle}>{props.name}</Text>
    </View>
  </TouchableOpacity>
);
export default props => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <SafeAreaView
          style={styles.container}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.containerUser}>
            <Text style={styles.nameUser}>Leonardo Loyo</Text>
          </View>
          <DrawerItem name="Inicio" link="Dashboard" navigate={navigate} />
          <DrawerItem name="Buscador" link="Search" navigate={navigate} />
          <DrawerItem name="Mi cuenta" link="Profile" navigate={navigate} />
          <DrawerItem name="Los mas deseados" link="Map" navigate={navigate} />
          <DrawerItem name="Tus publicaciones" link="Map" navigate={navigate} />
          <DrawerItem name="Mapa" link="Map" navigate={navigate} />
        </SafeAreaView>
      </ScrollView>
    </React.Fragment>
  );
};
