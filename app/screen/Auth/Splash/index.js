import React, {Component} from 'react';
import {
  //   Platform,
  Linking,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.4,
    height: height * 0.125,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

class SplashScreen extends Component {
  componentDidMount() {
    this.interval = setTimeout(() => {
      if (this.props.loggedIn) {
        this.props.navigation.navigate('StackPublic');
      } else {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
          }),
        );
      }
    }, 5000);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
    clearInterval(this.interval);
  }

  handleOpenURL = event => {
    this.navigate(event.url);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground
          source={require('../../../asset/sp.png')}
          resizeMode={'stretch'}
          style={styles.container}
        />
      </View>
    );
  }
}
export default SplashScreen;
