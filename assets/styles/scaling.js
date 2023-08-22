import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

function guidelineBaseWidth() {
  if (isSmall) {
    return 330;
  }
  return 350;
}
function guidelineBaseHeight() {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
}
function guidelineBaseFont() {
  if (width > 410) {
    return 430;
  }
  return 400;
}

const horizontalScale = size => (width / guidelineBaseWidth()) * size;
function VerticalScale(size) {
  return (height / guidelineBaseHeight()) * size;
}
function scaleFontSize(size) {
  return Math.round((size * width) / guidelineBaseFont());
}

export {horizontalScale, VerticalScale, scaleFontSize};
