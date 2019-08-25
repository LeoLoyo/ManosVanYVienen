import React, {Fragment} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from '../utils/styles';
import HeaderList from './HeaderList';

const styles = StyleSheet.create({
  container: {
    width: 260,
    aspectRatio: 1,
    paddingVertical: 8,
    paddingLeft: 8,
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerImage: {
    flex: 2,
    backgroundColor: 'blue',
  },
  images: {
    width: '100%',
    height: '100%',
  },
  containerFooter: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  title: {
    ...fonts.lg,
  },
  request: {
    ...fonts.sm,
  },
  containerDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerPlace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    ...fonts.sm,
  },
  publishDate: {
    ...fonts.sm,
  },
});

const ItemList = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: item.image}} style={styles.images} />
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.request}> {item.request}</Text>
        <View style={styles.containerDescription}>
          <View style={styles.containerPlace}>
            <Icon name="map-pin" size={12} />
            <Text style={styles.place}> Lugar: {item.place}</Text>
          </View>
          <Text style={styles.publishDate}>
            {moment(item.date_created).fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const SliderHorizontal = props => {
  return (
    <Fragment>
      <HeaderList title={props.title} quantity={(props.data || []).length} />
      <FlatList
        data={props.data}
        keyExtractor={(item, key) => String(item.id || key)}
        renderItem={(item, key) => <ItemList key={key} {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Fragment>
  );
};

export default SliderHorizontal;
