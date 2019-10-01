import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../utils/styles';

export default props => {
  return [
    <StatusBar
      backgroundColor={colors.primary}
      barStyle="dark-content"
      key="1"
    />,
    props.children,
  ];
};
