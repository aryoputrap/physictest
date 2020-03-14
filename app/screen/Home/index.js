import React, {Component} from 'react';
import {
  // SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Image,
  // KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Menuimage from '../../component/menuimage';
// import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.Shape1}>
          <View style={styles.user}>
            <Icon name="user-circle-o" size={45} color="white" />
            <View style={styles.viewUser}>
              <Text style={styles.userGreeting}>Aryo Putra Purwanto</Text>
              <Text style={styles.schoolofUser}>SMAN 1 Cianjur</Text>
            </View>
          </View>
          <View style={styles.backgroundContainer}>
            <Image
              style={styles.menu}
              resizeMode="cover"
              source={require('../../asset/menu.png')}
            />
          </View>
          {/* <View>
            <Image
              style={styles.awan}
              source={require('../../asset/awan1.png')}
            />
          </View> */}
        </View>
        <View style={styles.PilihMenu}>
          <Text style={styles.TeksPilihMenu}>Pilih Menu</Text>
        </View>
        <View style={styles.ViewMenu}>
          <TouchableOpacity style={styles.TouchMenu}>
            <Image
              resizeMode="contain"
              style={styles.MenuImage}
              source={require('../../asset/KI.png')}
            />
            <Text style={styles.TeksMenu}>KI/KD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchMenu}>
            <Image
              resizeMode="contain"
              style={styles.MenuImage}
              source={require('../../asset/i.png')}
            />
            <Text style={styles.TeksMenu}>Angket</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Bantuan')}
            style={styles.TouchMenu}>
            <Image
              resizeMode="contain"
              style={styles.MenuImage}
              source={require('../../asset/bantu.png')}
            />
            <Text style={styles.TeksMenu}>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchMenu}>
            <Image
              resizeMode="contain"
              style={styles.MenuImage}
              source={require('../../asset/grap.jpg')}
            />
            <Text style={styles.TeksMenu}>Angket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchMenu}>
            <Image
              resizeMode="contain"
              style={styles.MenuImage}
              source={require('../../asset/about.png')}
            />
            <Text style={styles.TeksMenu}>Tentang</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.TouchMenu}>
            <Image
              resizeMode="contain"
              style={styles.MenuImage}
              source={require('../../asset/Games.gif')}
            />
            <Text style={styles.TeksMenu}>Games</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}
