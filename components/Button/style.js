import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  VerticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: VerticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
