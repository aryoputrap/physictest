import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  tentang: {
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 30,
  },
  bodyki: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 30,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    height: height * 0.06,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 50,
  },
  menu: {
    width: width,
    height: height * 0.45,
    marginTop: 10,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  TeksMenu: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  awan: {
    height: height * 0.1,
    width: width,
    marginTop: 100,
  },
  ViewMenu: {
    alignSelf: 'center',
  },
  menudisplay: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  MenuImage: {
    width: width * 0.25,
    height: height * 0.12,
    marginTop: height * 0.04,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  PilihMenu: {
    width: '90%',
    height: '6%',
    backgroundColor: Color.main.bluedeep,
    borderLeftColor: '#042B3E',
    borderColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  TeksPilihMenu: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  Shape1: {
    width: '100%',
    height: '40%',
    backgroundColor: Color.main.bluedeep,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  parent: {
    backgroundColor: 'white',
    flex: 1,
  },
  vieeUSer: {
    flexDirection: 'column',
  },
  userGreeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
  },
  schoolofUser: {
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
});
