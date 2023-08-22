/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, VerticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: VerticalScale(7),
  },
  image: {
    marginTop: VerticalScale(12),
    marginBottom: VerticalScale(24),
    width: '100%',
    height: VerticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: VerticalScale(16)
  },
  description: {
    marginTop: VerticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: scaleFontSize(14),
    marginBottom: VerticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  }
});

export default style;
