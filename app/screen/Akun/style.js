import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: Color.main.primaryorange,
    // flex: 1,
  },
  flexcolumn: {
    flexDirection: 'column',
  },
  profil: {
    width: width,
    height: height * 0.2,
    backgroundColor: 'black',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  bodyprofil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 35,
  },
  TextWellcome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
  },
  schoolName: {
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
  imgCloud: {
    width: width,
    height: height * 0.09,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  imgCloud2: {
    width: width,
    height: height * 0.45,
    resizeMode: 'cover',
    alignSelf: 'stretch',
  },
  profilBody: {
    flexDirection: 'row',
    backgroundColor: Color.main.white,
    height: height * 0.3,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  textProfil: {
    color: Color.main.choclate,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 15,
  },
  columnText: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  textBarrier: {
    color: Color.main.choclate,
    marginTop: 15,
  },
});
