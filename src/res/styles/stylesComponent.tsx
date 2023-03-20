import {StyleSheet} from 'react-native';
import colors from '../colors';
import fonts from '../fonts';
import sizes from '../sizes';
const stylesComponent = StyleSheet.create({
  viewInput: {
    width: '100%',
    backgroundColor: colors.colorInput,
    height: sizes._50sdp,
    borderRadius: 60,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtInput: {
    color: colors.colorTextSiver,
    fontFamily: fonts.fontRegular,
    fontSize: sizes._screen_width * 0.038,
    width: '80%',
    height: '100%',
    marginLeft: sizes._15sdp,
  },
  icon: {
    height: sizes._screen_width * 0.06,
    width: sizes._screen_width * 0.06,
    marginLeft: sizes._15sdp,
    tintColor: colors.colorTextRed,
  },
  checkbox: {
    height: sizes._screen_width * 0.06,
    width: sizes._screen_width * 0.06,
    borderWidth: 0.8,
    borderColor: colors.colorTextSiver,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default stylesComponent;
