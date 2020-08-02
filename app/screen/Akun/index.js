import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './style';

//import screen
// import Materi from '../Menu/Menu';

export default class Home extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={Styles.profil}>
          <View style={Styles.bodyprofil}>
            <Icon name="user-circle-o" size={45} color="white" />
            <View style={Styles.flexcolumn}>
              <Text style={Styles.TextWellcome}>Nurdini</Text>
              <Text style={Styles.schoolName}>SMAN 1 Cianjur</Text>
            </View>
          </View>
          <Image
            style={Styles.imgCloud}
            source={require('../../asset/awan.png')}
          />
        </View>
        <View style={Styles.profilBody}>
          <View style={Styles.flexcolumn}>
            <Text style={Styles.textProfil}>Nama Sekolah</Text>
            <Text style={Styles.textProfil}>Nama</Text>
            <Text style={Styles.textProfil}>Kelas</Text>
            <Text style={Styles.textProfil}>No Absen</Text>
            <Text style={Styles.textProfil}>Gender</Text>
          </View>
          <View style={Styles.columnText}>
            <Text style={Styles.textBarrier}>:</Text>
            <Text style={Styles.textBarrier}>:</Text>
            <Text style={Styles.textBarrier}>:</Text>
            <Text style={Styles.textBarrier}>:</Text>
            <Text style={Styles.textBarrier}>:</Text>
          </View>
          <View style={Styles.columnText}>
            <Text style={Styles.textBarrier}>SMAN 1 Cianjur</Text>
            <Text style={Styles.textBarrier}>Nurdini</Text>
            <Text style={Styles.textBarrier}>XI IPA 1</Text>
            <Text style={Styles.textBarrier}>10</Text>
            <Text style={Styles.textBarrier}>Perempuan</Text>
          </View>
        </View>
        <Image
          style={Styles.imgCloud2}
          source={require('../../asset/awan2.png')}
        />
      </View>
    );
  }
}
