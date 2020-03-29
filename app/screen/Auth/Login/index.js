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
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

// const {height, width} = Dimensions.get('window');
class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
      username: '',
      Password: '',
    };
  }

  showPass = () => {
    if (this.state.press === false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : null}
        style={styles.fle}>
        <StatusBar translucent backgroundColor="transparent" />
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
                  onPress={() => this.props.navigation.navigate('StackPublic')}>
                  <Text style={styles.Submit}>SUBMIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Buttonx}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={styles.Submit}>REGISTER</Text>
                </TouchableOpacity>
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
