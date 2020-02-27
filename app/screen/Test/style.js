import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  viewindicator: {
    width,
    height,
    marginLeft: width * 0.1,
  },
  containerscrol: {
    height: height,
    width: width,
    marginTop: 20,
    marginBottom: 1,
  },
  opening: {
    flexDirection: 'row',
    top: height * 0.1,
  },
  textopening: {
    top: 50,
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageastronot: {
    width: width * 0.5,
    height: height * 0.2,
    alignContent: 'center',
    // justifyContent: 'center',
  },
  viewklik: {
    flexDirection: 'column',
  },
  tombolklik: {
    backgroundColor: Color.main.greyLine,
    width: width * 0.45,
    height: height * 0.1,
    justifyContent: 'center',
    marginTop: 10,
    top: 50,
    borderRadius: 10,
  },
  texttombol: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  tombolkliktahap: {
    backgroundColor: Color.main.greyLine,
    width: width * 0.45,
    height: height * 0.1,
    justifyContent: 'center',
    marginTop: 10,
    top: 50,
    borderRadius: 10,
    alignSelf: 'center',
  },
  tombolkliktahapPost: {
    backgroundColor: Color.main.greyLine,
    width: width * 0.45,
    height: height * 0.1,
    justifyContent: 'center',
    marginTop: 10,
    top: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: height * 0.1,
  },
  texttomboltahap: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
