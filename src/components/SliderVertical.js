import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import HeaderList from './HeaderList';
import ItemReview from './ItemReview';
import ItemCategory from './ItemCategory';
import ItemDonation from './ItemDonation';

const SliderVertical = props => {
  let ItemComponent = null;
  if (props.ItemComponent === 'ItemReview') {
    ItemComponent = ItemReview;
  }
  if (props.ItemComponent === 'ItemCategory') {
    ItemComponent = ItemCategory;
  }
  if (props.ItemComponent === 'ItemDonation') {
    ItemComponent = ItemDonation;
  }
  return (
    <Fragment>
      {props.title && (
        <HeaderList title={props.title} quantity={(props.data || []).length} />
      )}
      <FlatList
        data={props.data}
        keyExtractor={(item, key) => String(item.id || key)}
        renderItem={(item, key) => (
          <ItemComponent
            key={key}
            {...item}
            onPress={() => props.navigate(props.link, {...item})}
          />
        )}
        showsVerticalScrollIndicator={false}
        {...props.listProps}
      />
    </Fragment>
  );
};

export default SliderVertical;
