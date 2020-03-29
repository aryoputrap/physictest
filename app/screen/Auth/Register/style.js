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
  viewimage: {
    width: width * 0.3,
    marginTop: 10,
  },
  viewimagemoon: {
    width: width * 0.4,
  },
  astronot: {
    width: width * 0.4,
    height: height * 0.21,
    marginTop: 50,
  },
  moon: {
    width: width * 0.18,
    height: height * 0.1,
    bottom: 50,
    right: 10,
  },
  profil: {
    width: width,
    height: height * 0.35,
    backgroundColor: '#042B3E',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  bodyprofil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 35,
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
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
  textinput: {
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    width: width * 0.7,
    marginLeft: 10,
    borderRadius: 10,
  },
  Buttonx: {
    elevation: 10,
    textAlign: 'center',
    alignContent: 'center',
    width: width * 0.8,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC90E',
  },
  Submit: {
    color: '#042B3E',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
});
