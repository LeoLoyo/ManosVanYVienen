import {StyleSheet} from 'react-native';
import {colors, fontFamilyRegular, fontFamilyBold} from '../../utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  donator: {
    minHeight: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  photo: {
    paddingHorizontal: '10%',
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameProfile: {
    fontSize: 24,
    fontFamily: fontFamilyBold,
    color: colors.septenary,
    textAlign: 'center',
  },
  containerInfo: {
    width: '100%',
  },
  containerPlace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    fontSize: 14,
    fontFamily: fontFamilyRegular,
    color: colors.septenary,
  },
  donationsDone: {
    fontSize: 16,
    fontFamily: fontFamilyRegular,
    color: colors.octonary,
  },
  memberSince: {
    fontSize: 16,
    fontFamily: fontFamilyRegular,
    color: colors.octonary,
  },
  description: {
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  actions: {
    paddingTop: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnActions: {
    width: '50%',
  },
});
