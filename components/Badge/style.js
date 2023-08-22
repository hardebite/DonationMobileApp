import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  VerticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: VerticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
