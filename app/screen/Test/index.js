import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnTest}
          onPress={() => this.props.navigation.navigate('Ctt1Screen')}>
          <Text style={styles.textBtn}>TEKANAN HIDROSTATIS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTest}
          onPress={() => this.props.navigation.navigate('Ctt1Screen')}>
          <Text style={styles.textBtn}>Gaya Apung</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Ctt1Screen')}>
          <Text>GAYA APUNG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Ctt1Screen')}>
          <Text>Konsep Terapung, Melayang, dan Tenggelam (1)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Ctt1Screen')}>
          <Text>Terapung, Melayang, dan Tenggelam (2)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
