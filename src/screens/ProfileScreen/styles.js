import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../utils/styles';

export default StyleSheet.create({
  containerInfoAvatar: {
    flex: 1.7,
  },
  nameProfile: {
    fontSize: 24,
    fontFamily,
    color: colors.octonary,
    marginBottom: 16,
  },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingRight: 40,
  },
  quantity: {
    fontSize: 24,
    fontFamily,
    color: colors.octonary,
    marginBottom: 16,
  },
  boxQuantity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionProfile: {
    fontSize: 12,
    fontFamily,
    color: colors.octonary,
  },
  containerAvatar: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  editProfile: {
    width: 140,
  },
  sectionProfile: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 35,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
});
