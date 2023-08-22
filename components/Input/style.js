import {StyleSheet} from 'react-native';
import {scaleFontSize, VerticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455A',
  },
  input: {
    paddingVertical: VerticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)'
  },
});

export default style;
