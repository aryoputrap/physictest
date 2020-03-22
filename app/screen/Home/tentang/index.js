import React, {Component} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import HTML from 'react-native-render-html';
import styles from '../style';
import data from '../../../utilisasi/tentang';
export default class Home extends Component {
  static navigationOptions = () => ({
    title: 'HOME',
    headerTransparent: false,
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.tentang}>
          <Text>TENTANG</Text>
        </View>
        <View style={styles.tentang}>
          <HTML html={data.data.body} />
        </View>
      </SafeAreaView>
    );
  }
}
