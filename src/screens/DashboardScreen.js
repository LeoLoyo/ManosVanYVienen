import React, {Fragment} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  post as dataJson,
  categories as getCategories,
} from '../utils/Data.json';
import {colors} from '../utils/styles';
import {SliderHorizontal, HeaderDrawer, Screen} from '../components/index.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.senary,
  },
  contentMenu: {
    height: 44,
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 2,
  },
  splashScreenOne: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    aspectRatio: 2,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 100,
    borderBottomEndRadius: 100,
  },
  splashScreenTwo: {
    position: 'absolute',
    bottom: 0,
    right: '-25%',
    width: '50%',
    aspectRatio: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 200,
    borderTopEndRadius: 200,
    zIndex: 0,
  },
  containerList: {
    paddingBottom: 24,
  },
  separator: {
    marginBottom: 20,
  },
});

const NearYou = props => {
  return (
    <SliderHorizontal
      title="En tu ciudad"
      link="Donation"
      data={dataJson}
      navigate={props.navigate}
    />
  );
};

const Geners = props => {
  return (
    <SliderHorizontal
      title="Generos"
      link="Category"
      data={getCategories}
      navigate={props.navigate}
      ItemComponent={'ItemCategoryHorizontal'}
    />
  );
};

const Separator = () => <View style={styles.separator} />;

function DashboardScreen(props) {
  const {
    navigation: {navigate},
  } = props;
  return (
    <Screen {...props} dashboard>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.splashScreenOne} />
          <View style={styles.splashScreenTwo} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerList}>
            <NearYou navigate={navigate} />
            <Separator />
            <SliderHorizontal title="Los mas deseados" data={dataJson} />
            <Separator />
            <Geners navigate={navigate} />
            <Separator />
            <SliderHorizontal
              title="Tus publicaciones"
              data={dataJson}
              link="Donation"
              navigate={navigate}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </Screen>
  );
}

export default DashboardScreen;
