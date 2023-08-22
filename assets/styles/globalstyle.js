import {StyleSheet} from 'react-native';
import {VerticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  marginBottom24: {
    marginBottom: VerticalScale(24),
  },
});
export default globalStyle;
