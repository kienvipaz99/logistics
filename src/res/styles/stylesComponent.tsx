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
    color: colors.colorText,
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
    height: sizes._screen_width * 0.057,
    width: sizes._screen_width * 0.057,
    borderWidth: 0.8,
    borderColor: colors.colorTextSiver,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: sizes._50sdp,
    width: sizes._screen_width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  styleitemmenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgemenu: {
    height: sizes._screen_width * 0.065,
    width: sizes._screen_width * 0.065,
  },
});
export default stylesComponent;
