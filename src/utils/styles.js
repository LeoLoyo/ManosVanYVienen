import {Dimensions} from 'react-native';

export const fontFamily = 'Lato-Regular';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#5ABD8C',
  secondary: '#FFFFFF',
  tertiary: '#161616',
  quaternary: '#D5EEE2',
  quinary: '#F2F2F2',
  senary: '#F9F9F9',
};

export const padding = {
  sm: {
    padding: 10,
  },
  md: {
    padding: 20,
  },
};

export const fonts = {
  sm: {
    fontSize: 13,
    fontFamily,
  },
  md: {
    fontSize: 15,
    fontFamily,
  },
  colors: {
    primary: {
      color: colors.primary,
    },
    secondary: {
      color: colors.secondary,
    },
  },
};

export const buttons = {
  big: {
    borderRadius: 25,
    height: 56,
    marginBottom: 20,
  },
  small: {
    borderRadius: 15,
    height: 30,
    marginBottom: 10,
  },
  fill: {
    backgroundColor: colors.primary,
  },
  outLine: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
  },
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
};
