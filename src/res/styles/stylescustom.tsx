import {StyleSheet} from 'react-native';
import colors from '../colors';
import fonts from '../fonts';
import sizes from '../sizes';
const stylescustom = StyleSheet.create({
  txt1: {
    color: colors.colorText,
    fontSize: sizes._screen_width * 0.038,
    fontFamily: fonts.fontRegular,
  },
  txt2: {
    color: colors.colorText,
    fontSize: sizes._screen_width * 0.045,
    fontFamily: fonts.fontRegular,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorBackground,
  },
  imageSlap1: {height: sizes._screen_width * 0.7, width: sizes._screen_width * 0.7},
  tiker: {
    height: sizes._screen_width * 0.15,
    width: sizes._screen_width * 0.15,
    backgroundColor: colors.colorBGPink,
    borderRadius: sizes._60sdp,
    marginTop: sizes._screen_height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgticker: {
    height: sizes._screen_width * 0.075,
    width: sizes._screen_width * 0.075,
  },

  imageLogin: {height: sizes._csreen_height * 0.4, width: sizes._screen_width},
  styleLogin: {
    flex: 1,
    backgroundColor: 'white',
    width: sizes._screen_width,
    borderTopRightRadius: sizes._30sdp,
    borderTopLeftRadius: sizes._30sdp,
    alignItems: 'center',
    top: -sizes._screen_height * 0.07,
  },
  txtDangNhap: {
    color: colors.colorTextRed,
    fontSize: sizes._font_size_max_max,
    fontFamily: fonts.fontBold,
  },
  viewCheckboxLogin: {
    marginLeft: sizes._screen_width * 0.03,
    marginTop: sizes._15sdp,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtIntalic: {
    color: colors.colorTextSiver,
    fontFamily: fonts.fontItalic,
    fontSize: sizes._screen_width * 0.045,
  },
  txtsiver: {
    color: colors.colorTextSiver,
    fontFamily: fonts.fontRegular,
    fontSize: sizes._screen_width * 0.045,
  },
  headerHome: {
    width: sizes._screen_width,
    backgroundColor: colors.colorBGRed,
  },
  headerHome1: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: sizes._screen_height * 0.05,
  },
  containerHome: {
    flex: 1,
    backgroundColor: colors.colorBackground,
  },
  imglogo: {
    width: sizes._screen_width * 0.6,
  },
});
export default stylescustom;
