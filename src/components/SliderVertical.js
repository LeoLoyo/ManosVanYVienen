import React, {Fragment} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../utils/styles';
import HeaderList from './HeaderList';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    paddingHorizontal: '8%',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: 150,
    flexDirection: 'row',
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    flex: 1.5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});

const ItemList = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.description}>
          <Text numberOfLines={3}> {item.review}</Text>
          <TouchableOpacity onPress={item.onPress}>
            <Text>
              Ver mas
              <Icon name="chevron-right" />
            </Text>
          </TouchableOpacity>
          <Text>{moment(item.date_created).fromNow()}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const SliderVertical = props => {
  return (
    <Fragment>
      <HeaderList title={props.title} quantity={(props.data || []).length} />
      <FlatList
        data={props.data}
        keyExtractor={(item, key) => String(item.id || key)}
        renderItem={(item, key) => (
          <ItemList key={key} {...item} onPress={props.onPress} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Fragment>
  );
};

export default SliderVertical;
