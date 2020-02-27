import React, {Component} from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './style';

export default class Register extends Component {
  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={Styles.profil}>
          <View style={Styles.bodyprofil}>
            <Icon name="user-circle-o" size={45} color="white" />
            <View style={Styles.flexcolumn}>
              <Text style={Styles.TextWellcome}>REGISTER</Text>
              <Text style={Styles.schoolName}>SMAN 1 Cianjur</Text>
            </View>
          </View>
        </View>
        <View style={Styles.input}>
          <Icon
            name="user-circle-o"
            size={45}
            color="black"
            style={Styles.icon}
          />
          <View style={Styles.subinput}>
            <Text style={Styles.titleInput}>Nama:</Text>
            <TextInput style={Styles.textinput} />
          </View>
        </View>
      </View>
    );
  }
}
