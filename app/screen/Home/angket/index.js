import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import HTML from 'react-native-render-html';
import DropdownAlert from 'react-native-dropdownalert';
import axios from 'axios';
import styles from '../style';
import data from '../../../utilisasi/angket';
import Dropdown from '../../../component/dropdown';
import Loading from '../../../component/loading';
export default class Home extends Component {
  static navigationOptions = () => ({
    title: 'HOME',
    headerTransparent: false,
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle,
  });

  constructor() {
    super();
    this.state = {
      loading: false,
      ket: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
      },
    };
  }

  kirimJawaban = () => {
    this.setState({
      loading: true,
    });
    const {ket} = this.state;
    const users = {
      q1: ket.q1,
      q2: ket.q2,
      q3: ket.q3,
      q4: ket.q4,
      q5: ket.q5,
      q6: ket.q6,
      q7: ket.q7,
      q8: ket.q8,
      q9: ket.q9,
      q10: ket.q10,
      q11: ket.q11,
      q12: ket.q12,
    };
    const header = {
      'Content-Type': 'application/json',
    };
    console.log(users);
    axios({
      method: 'POST',
      url: 'http://elearnphysics.com//api/skala/post',
      headers: header,
      data: users,
    })
      .then(response => {
        this.response = response.data;
        console.log(response.status);
        if (response.status === 201) {
          this.dropDownAlertRef.alertWithType(
            'success',
            'Terimakasih sudah mendukung aplikasi ini.!',
            response.data.message,
          );
          this.onSuccessUpload();
        }
      })
      .catch(error => {
        console.log(error.message);
        this.dropDownAlertRef.alertWithType(
          'warn',
          'Mohon diperiksa kembali !',
          error.message,
        );
        this.onFailedUpload();
      });
  };

  onSuccessUpload() {
    this.setState({loading: false, isModalSucces: true});
    // this.dropDownAlertRef.alertWithType('success', 'Data Berhasil Input !');
    setTimeout(() => {
      this.props.navigation.navigate('StackPublic');
    }, 5000);
    // this.onSuccessLogout();
  }

  onFailedUpload() {
    this.setState({loading: false, isModalFailed: false});
    setTimeout(() => {
      this.props.navigation.navigate('StackPublic');
    }, 5000);
  }

  ket = async (name, value) => {
    await this.setState(prevState => ({
      ket: {
        ...prevState.ket,
        [name]: value,
      },
    }));
    // console.log(this.state.sendData);
  };

  render() {
    const {ket} = this.state;
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <View>
          <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </View>
        <View style={styles.tentang}>
          <HTML html={data.data.tittle} />
        </View>
        <Loading flag={this.state.loading} />
        <View style={styles.tentang1}>
          <HTML html={data.data.tittle1} />
          <HTML html={data.data.tittle2} />
          <HTML html={data.data.tittle3} />
          <View style={styles.tentang2}>
            <HTML html={data.data.ket1} />
            <HTML html={data.data.ket2} />
            <HTML html={data.data.ket3} />
            <HTML html={data.data.ket4} />
          </View>
        </View>
        <ScrollView style={styles.mainbody}>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>1. </Text>
              <HTML html={data.data.q1} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q1}
                onChange={itemValue => {
                  this.ket('q1', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>2. </Text>
              <HTML html={data.data.q2} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q2}
                onChange={itemValue => {
                  this.ket('q2', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>3. </Text>
              <HTML html={data.data.q3} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q3}
                onChange={itemValue => {
                  this.ket('q3', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>4. </Text>
              <HTML html={data.data.q4} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q4}
                onChange={itemValue => {
                  this.ket('q4', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>5. </Text>
              <HTML html={data.data.q5} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q5}
                onChange={itemValue => {
                  this.ket('q5', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>6. </Text>
              <HTML html={data.data.q6} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q6}
                onChange={itemValue => {
                  this.ket('q6', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>7. </Text>
              <HTML html={data.data.q7} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q7}
                onChange={itemValue => {
                  this.ket('q7', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>8. </Text>
              <HTML html={data.data.q8} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q8}
                onChange={itemValue => {
                  this.ket('q8', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>9. </Text>
              <HTML html={data.data.q9} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q9}
                onChange={itemValue => {
                  this.ket('q9', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>10. </Text>
              <HTML html={data.data.q10} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q10}
                onChange={itemValue => {
                  this.ket('q10', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>11. </Text>
              <HTML html={data.data.q11} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q11}
                onChange={itemValue => {
                  this.ket('q11', itemValue);
                }}
              />
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.bodyki}>
              <Text>12. </Text>
              <HTML html={data.data.q12} />
            </View>
            <View style={styles.Dropdowndata}>
              <Dropdown
                data={ket.q12}
                onChange={itemValue => {
                  this.ket('q12', itemValue);
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.kirimJawaban()}>
            <Text style={styles.textbtn}>KIRIM</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
