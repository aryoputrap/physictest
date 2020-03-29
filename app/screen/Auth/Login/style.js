import {Dimensions, StyleSheet} from 'react-native';
// import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  BtnEye: {
    justifyContent: 'flex-end',
  },
  fle: {
    flex: 1,
  },
  login: {
    position: 'absolute',
    alignContent: 'center',
    width: width * 0.5,
    height: 50,
    backgroundColor: '#FFC90E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Submit: {
    color: '#042B3E',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  Buttonx: {
    textAlign: 'center',
    alignContent: 'center',
    width: width * 0.8,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC90E',
  },
  inner: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 275,
    alignContent: 'center',
    flex: 3,
  },
  HeaderLogin: {
    marginBottom: 20,
    color: '#042B3E',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  InputIconPass: {
    top: 8,
    left: 45,
  },
  ViewTextInput: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    bottom: 10,
    marginTop: 20,
    height: height * 0.07,
    width: width * 0.8,
  },
  InputIcon: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    right: 15,
  },
  InputIcon2: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  inputUsername: {
    fontSize: 21,
    textAlign: 'center',
    width: width * 0.5,
    backgroundColor: 'white',
    color: '#042B3E',
    right: 15,
    borderColor: 'black',
  },
  inputPassword: {
    fontSize: 21,
    textAlign: 'center',
    width: width * 0.5,
    backgroundColor: 'white',
    color: '#042B3E',
    borderColor: 'black',
  },
  btnContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: 8,
  },
});
