import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  VerticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: VerticalScale(7),
  },
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: VerticalScale(24),
  },
  success: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: VerticalScale(24),
  },
});

export default style;
