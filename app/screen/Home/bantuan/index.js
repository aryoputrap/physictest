import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import style from '../style';

export default class App extends Component {
  static navigationOptions = () => ({
    title: 'HOME',
    headerTransparent: false,
    headerTitleStyle: style.headerTitleStyle,
    headerStyle: style.headerStyle,
  });
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: '',
      msg: '',
    };
  }
  sendOnWhatsApp = () => {
    let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if (mobile) {
      if (msg) {
        let url =
          'whatsapp://send?text=' +
          this.state.msg +
          '&phone=' +
          this.state.mobile_no;
        Linking.openURL(url);
        // let url = Linking.openURL(
        //   'whatsapp://send?text=hello&phone=+628158800024',
        // );
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            Alert.alert('Make sure Whatsapp installed on your device');
          });
      } else {
        Alert.alert('Please insert message to send');
      }
    } else {
      Alert.alert('Please insert mobile no');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.send}>BANTUAN</Text>
        <TextInput
          value={this.state.mobile_no}
          onChangeText={mobile_no => this.setState({mobile_no})}
          placeholder={'Enter Mobile'}
          style={styles.input}
          keyboardType={'numeric'}
        />
        <TextInput
          value={this.state.msg}
          onChangeText={msg => this.setState({msg})}
          placeholder={'Enter message'}
          style={styles.input}
        />
        <View style={styles.sendwa}>
          <Button onPress={this.sendOnWhatsApp} title="KIRIM PESAN WHATSAPP" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 30,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    margin: 20,
    backgroundColor: '#D3D3D3',
  },
  send: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 30,
  },
  sendwa: {
    marginTop: 20,
    width: '50%',
    borderRadius: 10,
    height: '10%',
  },
});
