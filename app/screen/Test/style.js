import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnTest: {
    backgroundColor: Color.main.primaryorange,
    borderTopWidth: 10,
    borderTopColor: Color.main.blueAkun,
    borderRadius: 10,
    width: width * 0.8,
    height: height * 0.1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.main.baseBlack,
    alignContent: 'center',
    textAlign: 'center',
    // textAlignVertical: 'center',
  },
});
