import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Styles from './style';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      nama: '',
      sekolah: '',
      kelas: '',
      nik: '',
      password: '',
    };
  }

  kirimJawaban = () => {
    const jwb = this.state;
    const users = {
      nama: jwb.nama,
      sekolah: jwb.sekolah,
      kelas: jwb.kelas,
      nik: jwb.nik,
      password: jwb.password,
    };
    const header = {
      'Content-Type': 'application/json',
    };
    console.log(users);
    axios({
      method: 'POST',
      url: 'http://192.168.1.109:8000/api/cc1/post',
      headers: header,
      data: users,
    })
      .then(response => {
        this.response = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={Styles.profil}>
          <View style={Styles.bodyprofil}>
            <View Styles={Styles.viewimage}>
              <Image
                style={Styles.astronot}
                source={require('../../../asset/astronot.png')}
              />
            </View>
            <View style={Styles.flexcolumn}>
              <Text style={Styles.schoolName}>REGISTER</Text>
              <Text style={Styles.schoolName}>Mohon Lengkapi!</Text>
            </View>
            <View Styles={Styles.viewimagemoon}>
              <Image
                style={Styles.moon}
                source={require('../../../asset/Icon.png')}
              />
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
          <View style={Styles.textinput}>
            <TextInput
              placeholder={'Nama Siswa'}
              onChangeText={txt => this.setState({nama: txt})}
            />
          </View>
        </View>
        <View style={Styles.input}>
          <Icon2 name="school" size={35} color="black" style={Styles.icon} />
          <View style={Styles.textinput}>
            <TextInput
              placeholder={'Nama Sekolah'}
              onChangeText={txt => this.setState({sekolah: txt})}
            />
          </View>
        </View>
        <View style={Styles.input}>
          <Icon2 name="store-alt" size={35} color="black" style={Styles.icon} />
          <View style={Styles.textinput}>
            <TextInput
              placeholder={'Kelas'}
              onChangeText={txt => this.setState({kelas: txt})}
            />
          </View>
        </View>
        <View style={Styles.input}>
          <Icon name="list-ol" size={45} color="black" style={Styles.icon} />
          <View style={Styles.textinput}>
            <TextInput
              placeholder={'Nomor Induk Siswa'}
              onChangeText={txt => this.setState({nik: txt})}
            />
          </View>
        </View>
        <View style={Styles.input}>
          <Icon name="keyboard-o" size={40} color="black" style={Styles.icon} />
          <View style={Styles.textinput}>
            <TextInput
              placeholder={'Password'}
              onChangeText={txt => this.setState({Password: txt})}
            />
          </View>
        </View>
        <TouchableOpacity
          style={Styles.Buttonx}
          onPress={() => this.kirimJawaban()}>
          <Text style={Styles.Submit}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
