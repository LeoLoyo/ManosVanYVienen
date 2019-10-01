import React from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import {TextInput, SliderVertical} from '../../components';
import {categories as getCategories} from '../../utils/Data.json';

const IconLeftSearch = props => (
  <View style={styles.iconSearchBar}>
    <Icon name="search" size={25} />
  </View>
);
const IconFilterSearch = props => (
  <TouchableOpacity style={styles.iconSearchBar}>
    <Icon name="sliders" size={25} />
  </TouchableOpacity>
);

const InputSearch = props => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        name="search"
        placeholder="Search ropa, electrodomestics"
        IconLeft={IconLeftSearch}
        maxLength={50}
        IconRight={IconFilterSearch}
      />
    </View>
  );
};

const SearchScreen = props => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <InputSearch />
      <ScrollView>
        <SliderVertical
          ItemComponent="ItemCategory"
          link="Category"
          data={getCategories}
          navigate={navigate}
          listProps={{
            numColumns: 2,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default SearchScreen;
