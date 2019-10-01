import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';
import StepOneImg from '../../../assets/images/stepOne.png';
import StepTwoImg from '../../../assets/images/stepTwo.png';
import StepThreeImg from '../../../assets/images/stepThree.png';
import {colors} from '../../utils/styles';

import AuthScreen from '../AuthScreen';
import styles from './styles';
import {Screen} from '../../components';

const Step = props => {
  return (
    <View style={styles.containerStep}>
      <View style={styles.containeText}>
        <Text style={styles.title}>{props.stepTitle}</Text>
        <Text style={styles.subTitle}>{props.stepSubTitle}</Text>
      </View>
      <Image source={props.image} ImageResizeMode="contain" />
    </View>
  );
};

class TutorialScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={colors.secondary}
          barStyle="dark-content"
          key="1"
        />
        <SafeAreaView style={styles.container} key="2">
          <Swiper
            style={Platform.select({
              android: {
                height: 734,
                width: 375,
              },
              ios: {},
            })}
            paginationStyle={styles.paginationStyle}
            dotColor={colors.quaternary}
            activeDotColor={colors.primary}
            activeDotStyle={styles.activeDotStyle}
            dotStyle={styles.dotStyle}
            loop={false}>
            <Step
              stepTitle="Discounted Secondhand Books"
              stepSubTitle="Used and near new secondhand books at great prices."
              image={StepOneImg}
            />
            <Step
              stepTitle="20 Book Grocers Nationally"
              stepSubTitle="We've successfully opened 20 stores across Australia."
              image={StepTwoImg}
            />
            <Step
              stepTitle="Sell or Recycle Your Old Books With Us"
              stepSubTitle="If you're looking to downsize, sell or recycle old books, the Book Grocer can help."
              image={StepThreeImg}
            />
            <AuthScreen />
          </Swiper>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

export default TutorialScreen;
