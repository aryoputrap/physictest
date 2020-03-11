import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../constant/Color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: width * 0.95,
    height: height * 0.15,
    marginTop: height * 0.005,
  },
  containdata: {
    width: width * 0.75,
  },
  flatlist: {
    flex: 1,
    width: width * 0.73,
    height: height,
    marginBottom: height * 0.22,
  },
  titletest: {
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  mainbody: {
    flexDirection: 'row',
    marginTop: 10,
  },
  scrollview: {
    top: 5,
    paddingBottom: height * 0.2,
    height,
    width: width * 0.15,
  },
  scrollview2: {
    height,
    alignSelf: 'center',
    marginBottom: height * 0.1,
    width: width * 0.65,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 2,
  },
  viewpager: {
    flexGrow: 1,
    borderWidth: 3,
    borderColor: 'red',
    width: width * 0.725,
    height,
    marginBottom: height * 0.2,
  },
  viewindicator: {
    marginLeft: width * 0.03,
    height: height * 0.65,
    marginBottom: height * 0.25,
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
  itmtitle: {
    textAlign: 'center',
  },
  itmSoal: {
    marginTop: 3,
    marginRight: 5,
    justifyContent: 'center',
    flex: 1,
  },
  itmBody: {
    marginTop: 3,
    marginRight: 10,
    justifyContent: 'center',
    flex: 1,
  },
  soal: {
    marginTop: 10,
  },
  tier: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  radio: {
    justifyContent: 'flex-start',
  },
  jawaban: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
  },
  input: {
    width: width * 0.58,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputessay: {
    width: width * 0.7,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  answer: {
    flexDirection: 'row',
    alignContent: 'center',
    width: width * 0.7,
    paddingRight: 15,
    margin: 2,
  },
  image: {
    alignSelf: 'center',
    margin: 5,
  },
  image14: {
    // alignSelf: 'center',
    // margin: width * 0.8,
    width: 300,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: Color.main.orange,
    borderRadius: 10,
    width: width * 0.7,
    height: height * 0.08,
    alignSelf: 'center',
    margin: 20,
    marginBottom: height * 0.1,
  },
  textbtn: {
    color: Color.white,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
