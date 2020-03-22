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
          <Text style={styles.textBtn}>E-CDCCText-1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTest}
          onPress={() => this.props.navigation.navigate('Ctt2Screen')}>
          <Text style={styles.textBtn}>E-CDCCText-2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTest}
          onPress={() => this.props.navigation.navigate('Ctt3Screen')}>
          <Text style={styles.textBtn}>E-CDCCText-3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTest}
          onPress={() => this.props.navigation.navigate('Ctt4Screen')}>
          <Text style={styles.textBtn}>E-CDCCText-4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
