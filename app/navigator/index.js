/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Text, Icon} from 'native-base';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Color from '../constant/Color';
//import Auth
import SplashScreen from '../screen/Auth/Splash';
import Login from '../screen/Auth/Login';
import Register from '../screen/Auth/Register';
//import Home
import HomeScreen from '../screen/Home';
import AkunScreen from '../screen/Akun';
import TestScreen from '../screen/Test';
import Ctt1Screen from '../screen/Test/CTT1';
import Ctt2Screen from '../screen/Test/CTT2';
import Ctt3Screen from '../screen/Test/CTT3';
import Ctt4Screen from '../screen/Test/CTT4';
// import ChatScreen from '../screen/Chat';

const ROUTES = {
  Home: {name: 'home', label: 'Home'},
  Test: {name: 'test', label: 'Test'},
  Akun: {name: 'akun', label: 'Akun'},
};

const TabBarIcon = (props, tintColor) => {
  const {navigation} = props;
  const {routeName} = navigation.state;
  let iconName;
  let iconType;
  if (routeName.toLowerCase() === ROUTES.Home.name) {
    iconName = 'home';
    iconType = 'AntDesign';
  } else if (routeName.toLowerCase() === ROUTES.Test.name) {
    iconName = 'ship';
    iconType = 'FontAwesome';
  } else if (routeName.toLowerCase() === ROUTES.Akun.name) {
    iconName = 'user';
    iconType = 'FontAwesome';
  }
  return (
    <Icon
      type={iconType}
      name={iconName}
      style={{fontSize: 20, color: tintColor}}
    />
  );
};

const TabBarLabel = (props, tintColor) => {
  const {navigation} = props;
  const {routeName} = navigation.state;
  return (
    <Text style={[styles.tabLabel, {color: tintColor}]}>
      {ROUTES[routeName].label}
    </Text>
  );
};

const StackPublic = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen,
    Akun: AkunScreen,
  },
  {
    defaultNavigationOptions: props => ({
      tabBarIcon: ({tintColor}) => TabBarIcon(props, tintColor),
      tabBarLabel: ({tintColor}) => TabBarLabel(props, tintColor),
    }),
    // headerMode: null,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: Color.main.primaryorange,
      inactiveTintColor: 'gray',
      keyboardHidesTabBar: false,
      tabStyle: {
        paddingVertical: 10,
      },
      style: {
        height: 50,
        elevation: 12,
        borderTopWidth: 0,
      },
    },
    // initialRouteName: 'Home',
    initialRouteName: 'Test',
    // initialRouteName: 'Akun',
  },
);

const PublicStack = createStackNavigator(
  {
    StackPublic: {
      screen: StackPublic,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    Ctt1Screen: Ctt1Screen,
    Ctt2Screen: Ctt2Screen,
    Ctt3Screen: Ctt3Screen,
    Ctt4Screen: Ctt4Screen,
    // Absensi: Absensi,
    // InputData: InputData,
  },
  {
    headerMode: 'screen',
    // initialRouteName: 'Ctt1Screen',
    // initialRouteName: 'Login',
    initialRouteName: 'StackPublic',
    // initialRouteName: 'Register',
    // initialRouteName: 'SplashScreen',
  },
);

export default createAppContainer(PublicStack);

const styles = StyleSheet.create({
  IconBottom: {
    alignSelf: 'center',
  },
  tabLabel: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    marginTop: 2,
    color: '#333333',
  },
  icon: {
    fontSize: 20,
  },
});
