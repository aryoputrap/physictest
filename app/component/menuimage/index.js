import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './style';

export default class App extends Component {
  render() {
    const {source, textmenu, onPress} = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.TouchMenu} onPress={onPress}>
          <Image
            resizeMode="contain"
            style={styles.MenuImage}
            source={source}
          />
          <Text style={styles.TeksMenu}>{textmenu}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
