import React, {Component} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import HTML from 'react-native-render-html';
import styles from '../style';
import data from '../../../utilisasi/kikd';
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
        <View style={styles.bodyki}>
          <Text>KI-1: </Text>
          <HTML html={data.data.k1} />
        </View>
        <View style={styles.bodyki}>
          <Text>KI-2: </Text>
          <HTML html={data.data.k2} />
        </View>
        <View style={styles.bodyki}>
          <Text>KI-3: </Text>
          <HTML html={data.data.k3} />
        </View>
        <View style={styles.bodyki}>
          <Text>KI-4: </Text>
          <HTML html={data.data.k4} />
        </View>
      </SafeAreaView>
    );
  }
}
