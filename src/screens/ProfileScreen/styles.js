import {StyleSheet} from 'react-native';
import {colors, fontFamilyRegular} from '../../utils/styles';

export default StyleSheet.create({
  containerInfoAvatar: {
    flex: 1.7,
  },
  nameProfile: {
    fontSize: 24,
    fontFamily: fontFamilyRegular,
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
    fontFamily: fontFamilyRegular,
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
    fontFamily: fontFamilyRegular,
    color: colors.octonary,
  },
  containerAvatar: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
