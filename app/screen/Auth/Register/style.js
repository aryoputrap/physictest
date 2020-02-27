import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../constant/Color';

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
    height: height * 0.3,
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
  input: {
    flexDirection: 'row',
    width: width * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  subinput: {
    flexDirection: 'column',
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textinput: {
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: width * 0.7,
    marginLeft: 10,
  },
});
