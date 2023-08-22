import {StyleSheet} from 'react-native';
import {horizontalScale, VerticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: VerticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: VerticalScale(13),
    left: horizontalScale(10),
  },
  donationInformation: {
    marginTop: VerticalScale(16),
  },
  price: {
    marginTop: VerticalScale(5),
  },
});

export default style;
