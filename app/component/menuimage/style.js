import {Dimensions, StyleSheet} from 'react-native';
// import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  TeksMenu: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  TouchMenu: {
    overflow: 'hidden',
    width: '32%',
    height: '20%',
    position: 'relative',
  },
  MenuImage: {
    flex: 1,
    width: width,
    height: height,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginLeft: 5,
    marginRight: 5,
  },
});
