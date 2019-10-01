import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import {TitleScreen, Button} from '../../components';
import styles from './styles';
import {colors} from '../../utils/styles';
import {AvatarProfile} from '../../components';

const SectionDonator = props => {
  return (
    <View style={styles.donator}>
      <AvatarProfile style={{marginBottom: 0}} />
      <View style={styles.containerInfo}>
        <Text style={styles.nameProfile}>Leonado Loyo</Text>
        <View style={styles.containerPlace}>
          <Icon name="map-pin" size={16} color={colors.primary} />
          <Text style={styles.place} numberOfLines={1}>
            Cabudare
          </Text>
        </View>
        <View style={{flex: 1, minHeight: 80}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 24}}>12</Text>
              <Text style={{textAlign: 'center'}}>Donaciones Publicadas</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 24}}>10</Text>
              <Text style={{textAlign: 'center'}}>Donaciones Relizadas</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 24}}>
                {'9 '}
                <Icon name="heart" size={24} />
              </Text>
              <Text style={{textAlign: 'center'}}>Total Agradecimientos</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const SectionPhoto = props => {
  return (
    <View style={styles.photo}>
      <Image
        source={{
          uri:
            'https://www.pullman.com.co/uploads/pullman/product_images/96/medium/combo-mohnblatt-btu-cafe-cama-tapizada-protector-almohada_uxVwn.jpg',
        }}
        style={{width: '100%', aspectRatio: 4 / 3, borderRadius: 5}}
        resizeMode="cover"
      />
    </View>
  );
};
const SectionDescription = props => {
  return (
    <View style={styles.description}>
      <Text>Leonardo esta donando: </Text>
      <Text>
        TV de 32 pulgadas 100% operativo no lo uso porque no tengo tiempo y
        prefiero regalarlo
      </Text>
    </View>
  );
};

const SectionActions = props => {
  return (
    <View style={styles.actions}>
      {props.requested ? (
        <Button name="Cancelar" big fill shadow style={styles.btnActions} />
      ) : (
        <Button name="Solicitar" big fill shadow style={styles.btnActions} />
      )}
    </View>
  );
};

class DonationScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <SectionDonator />
          <SectionPhoto />
          <SectionDescription />
          <SectionActions />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DonationScreen;
