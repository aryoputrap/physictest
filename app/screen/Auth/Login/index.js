import React, {Component} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropdownAlert from 'react-native-dropdownalert';
import Loading from '../../../component/loading';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import styles from './style';
import {YellowBox} from 'react-native';
console.disableYellowBox = true;

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      showPass: true,
      press: false,
      name: '',
      password: '',
    };
  }
  yellowbox = () => YellowBox.ignoreWarnings(['Warning: ...']);

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  login = async () => {
    this.setState({
      loading: true,
    });
    const jwb = this.state;
    const user = {
      name: jwb.name,
      password: jwb.password,
    };
    console.log(user);
    const header = {
      'Content-Type': 'application/json',
    };
    axios({
      method: 'POST',
      url: 'https://elearnphysics.com/api/user/login',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        if (response.data.status === 201) {
          this.dropDownAlertRef.alertWithType(
            'success',
            'Login Berhasil',
            response.data.message,
          );
          this.onSuccessUpload();
        } else if (response.data.status === 401) {
          this.dropDownAlertRef.alertWithType(
            'info',
            'Login Tidak Berhasil',
            response.data.message,
          );
          this.onFailedUpload();
        }
      })
      .catch(error => {
        // console.log(error.message);
        this.dropDownAlertRef.alertWithType(
          'error',
          'Mohon diperiksa kembali',
          error.message,
        );
        this.onFailedUpload();
      });
  };

  onSuccessUpload() {
    this.setState({loading: false, isModalSucces: true});
    setTimeout(() => {
      this.props.navigation.navigate('StackPublic');
    }, 5000);
  }

  onFailedUpload() {
    this.setState({loading: false, isModalFailed: false});
    setTimeout(() => {
      // this.props.navigation.navigate('StackPublic');
    }, 5000);
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : null}
        style={styles.fle}>
        <StatusBar translucent backgroundColor="transparent" />
        <View>
          <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </View>
        <Loading flag={this.state.loading} />
        <ImageBackground
          style={styles.container}
          source={require('../../../asset/scc.png')}>
          <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <View style={styles.login} />
                <Text style={styles.HeaderLogin}>LOGIN</Text>
                <View style={styles.ViewTextInput}>
                  <Icon2
                    style={styles.InputIcon}
                    name={'user-graduate'}
                    size={35}
                    color={'#042B3E'}
                  />
                  <TextInput
                    style={styles.inputUsername}
                    placeholder={'Username'}
                    placeholderTextColor={'#042B3E'}
                    onChangeText={text => this.setState({name: text})}
                    value={this.state.name}
                  />
                </View>
                <View style={styles.ViewTextInput}>
                  <Icon
                    style={styles.InputIcon2}
                    name={'lock'}
                    size={35}
                    color={'#042B3E'}
                  />
                  <TextInput
                    style={styles.inputPassword}
                    secureTextEntry={this.state.showPass}
                    placeholder={'Password'}
                    placeholderTextColor={'#042B3E'}
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                  />
                  <TouchableOpacity
                    onPress={this.showPass.bind(this)}
                    style={styles.BtnEye}>
                    <Icon
                      name={this.state.press === false ? 'eye' : 'eye-slash'}
                      size={30}
                      color={this.state.press === false ? '#042B3E' : 'red'}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.Buttonx}
                  onPress={() => this.login()}>
                  <Text style={styles.Submit}>SUBMIT</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={styles.Buttonx}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={styles.Submit}>REGISTER</Text>
                </TouchableOpacity> */}
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

//biru:#042B3E

export default Welcome;
