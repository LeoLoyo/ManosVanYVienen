import React, {Fragment} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import HeaderList from './HeaderList';
import ItemCategoryHorizontal from './ItemCategoryHorizontal';
import ItemList from './ItemList';

const styleList = StyleSheet.create({
  content: {
    padding: 8,
  },
});

const SliderHorizontal = props => {
  let ItemComponent = ItemList;
  if (props.ItemComponent === 'ItemCategoryHorizontal') {
    ItemComponent = ItemCategoryHorizontal;
  }
  return (
    <Fragment>
      <HeaderList title={props.title} quantity={(props.data || []).length} />
      <FlatList
        data={props.data}
        keyExtractor={(item, key) => String(item.id || key)}
        contentContainerStyle={styleList.styleList}
        renderItem={(item, key) => (
          <ItemComponent
            key={key}
            {...item}
            onPress={() => props.navigate(props.link, {...item})}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Fragment>
  );
};

export default SliderHorizontal;
