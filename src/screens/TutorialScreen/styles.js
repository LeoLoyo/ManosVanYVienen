import {StyleSheet} from 'react-native';
import {colors} from '../../utils/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationStyle: {
    bottom: '15%',
  },
  dotStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  activeDotStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },

  containerStep: {
    width: '90%',
    marginVertical: '15%',
    height: '70%',
    marginHorizontal: '5%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containeText: {
    marginBottom: 100,
    paddingHorizontal: '8%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.primary,
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.primary,
  },
});
