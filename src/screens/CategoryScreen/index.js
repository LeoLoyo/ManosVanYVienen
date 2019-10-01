import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {SliderVertical, Screen} from '../../components';
import {post as getPost} from '../../utils/Data.json';

const CategoryScreen = props => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <Screen {...props} title={props.navigation.state.params.item.title}>
      <SafeAreaView>
        <ScrollView>
          <SliderVertical
            ItemComponent="ItemDonation"
            data={getPost}
            navigate={navigate}
            link="Donation"
          />
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
};

export default CategoryScreen;
