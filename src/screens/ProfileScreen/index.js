import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import {Button, SliderHorizontal, SliderVertical} from '../../components';
import styles from './styles';

const AvatarPerfil = () => (
  <Image
    source={require('../../../assets/images/profile.png')}
    style={styles.avatar}
  />
);

const EditProfile = () => (
  <View style={styles.editProfile}>
    <Button name="Edit Profile" fill shadow />
  </View>
);

const SectionProfile = () => {
  return (
    <View style={styles.sectionProfile}>
      <View style={styles.containerInfoAvatar}>
        <Text style={styles.nameProfile}>Will Newman</Text>
        <Text style={styles.descriptionProfile}>
          Constantly travelling and keeping up to date with business related
          books.
        </Text>
        <View style={styles.containerQuantity}>
          <View style={styles.boxQuantity}>
            <Text style={styles.quantity}>21</Text>
            <Text style={styles.descriptionProfile}>Donaciones</Text>
          </View>
          <View style={styles.boxQuantity}>
            <Text style={styles.quantity}>9</Text>
            <Text style={styles.descriptionProfile}>Regalos</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerAvatar}>
        <AvatarPerfil />
        <EditProfile />
      </View>
      <View />
    </View>
  );
};

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.flexOne}>
        <ScrollView>
          <SectionProfile />
          {/* Carrousel */}
          <SliderHorizontal
            title="Mis Donaciones"
            data={[...Array(10).keys()].map(item => ({
              ...item,
              title: 'Zapatos Adidas',
              place: 'Cabudare',
              request: '2 Solicitudes',
              date_created: new Date(),
              image:
                'https://www.pullman.com.co/uploads/pullman/product_images/96/medium/combo-mohnblatt-btu-cafe-cama-tapizada-protector-almohada_uxVwn.jpg',
            }))}
          />
          <SliderVertical
            title="Agradecimientos"
            data={[...Array(7).keys()].map(item => ({
              ...item,
              title: 'Zapatos Adidas',
              place: 'Cabudare',
              request: '2 Solicitudes',
              review:
                'Muchas gracias dios te lo pague, eres una excelente persona sigue asi mil gracias',
              date_created: new Date(),
              image:
                'https://www.pullman.com.co/uploads/pullman/product_images/96/medium/combo-mohnblatt-btu-cafe-cama-tapizada-protector-almohada_uxVwn.jpg',
            }))}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
