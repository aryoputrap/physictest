import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HTML from 'react-native-render-html';
import VideoPlayer from 'react-native-video-controls';
import DropdownAlert from 'react-native-dropdownalert';
import Loading from '../../../component/loading';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import axios from 'axios';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import data4 from '../../../utilisasi/data4';
import style from '../style_ctt';
import {YellowBox} from 'react-native';
const timer = require('react-native-timer');
console.disableYellowBox = true;

const secondIndicatorStyles = {
  stepIndicatorSize: 37,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 6,
  stepStrokeCurrentColor: '#008CC9',
  stepStrokeWidth: 4,
  separatorStrokeFinishedWidth: 5,
  stepStrokeFinishedColor: '#008CC9',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#008CC9',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#008CC9',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#008CC9',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#008CC9',
};

const getStepIndicatorIconConfig = ({position, stepStatus}) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : '#008CC9',
    size: 19,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'filter-1';
      break;
    }
    case 1: {
      iconConfig.name = 'filter-2';
      break;
    }
    case 2: {
      iconConfig.name = 'filter-3';
      break;
    }
    case 3: {
      iconConfig.name = 'filter-4';
      break;
    }
    case 4: {
      iconConfig.name = 'filter-5';
      break;
    }
    case 5: {
      iconConfig.name = 'filter-6';
      break;
    }
    case 6: {
      iconConfig.name = 'filter-7';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

export default class App extends Component {
  static navigationOptions = () => ({
    title: 'HOME',
    headerTransparent: false,
    headerTitleStyle: style.headerTitleStyle,
    headerStyle: style.headerStyle,
  });

  constructor() {
    super();
    this.state = {
      waktu: 'null',
      time: false,
      timer: 'null',
      minutes_Counter: '00',
      seconds_Counter: '00',
      currentPage: 0,
      checked: 'first',
      isPlaying: true,
      isLooping: true,
      fullscreen: false,
      kelas: 'kelas',
      nik: 'nik',
      nama: 'nama',
      tier11: 'null',
      tier12: 'null',
      tier13: 'null',
      tier13_e: 'null',
      tier14: 'null',
      tier21: 'null',
      tier31: 'null',
      tier32: 'null',
      tier33: 'null',
      tier33_e: 'null',
      tier34: 'null',
      tier41: 'null',
      tier42: 'null',
      tier43: 'null',
      tier44: 'null',
      tier45: 'null',
      tier61: 'null',
      tier71: 'null',
      tier72: 'null',
      tier73: 'null',
      tier73_e: 'null',
      tier74: 'null',
    };
  }
  yellowbox = () => YellowBox.ignoreWarnings(['Warning: ...']);
  kirimJawaban = async () => {
    this.setState({
      loading: true,
    });
    const jwb = this.state;
    const user = {
      kelas: jwb.nama,
      nik: jwb.nik,
      nama: jwb.nama,
      tier11: jwb.tier11,
      tier12: jwb.tier12,
      tier13: jwb.tier13,
      tier13_e: jwb.tier13_e,
      tier14: jwb.tier14,
      tier21: jwb.tier21,
      tier31: jwb.tier31,
      tier32: jwb.tier32,
      tier33: jwb.tier33,
      tier33_e: jwb.tier33_e,
      tier34: jwb.tier34,
      tier41: jwb.tier41,
      tier42: jwb.tier42,
      tier43: jwb.tier43,
      tier44: jwb.tier44,
      tier45: jwb.tier45,
      tier61: jwb.tier61,
      tier71: jwb.tier71,
      tier72: jwb.tier72,
      tier73: jwb.tier73,
      tier73_e: jwb.tier73_e,
      tier74: jwb.tier74,
    };
    console.log(user);
    // const tokenx = await AsyncStorage.getItem('token');
    const header = {
      'Content-Type': 'application/json',
    };
    axios({
      method: 'POST',
      url: 'https://elearnphysics.com/api/cct4/post',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response.status);
        if (response.status === 201) {
          this.dropDownAlertRef.alertWithType(
            'success',
            'Data telah terkirim!',
            response.data.message,
          );
          this.onSuccessUpload();
        }
      })
      .catch(error => {
        // console.log(error.message);
        this.dropDownAlertRef.alertWithType(
          'warn',
          'Mohon diperiksa kembali, data yang telah anda input!',
          error.message,
        );
        this.onFailedUpload();
      });
  };

  sumbmitInc = () => {
    this.setState(prevState => ({currentPage: prevState.currentPage + 1}));
  };

  onSuccessUpload() {
    this.setState({loading: false, isModalSucces: true});
    setTimeout(() => {
      this.props.navigation.navigate('StackPublic');
    }, 5000);
  }

  onFailedUpload() {
    this.setState({loading: false, isModalFailed: false});
    setTimeout(() => {
      this.props.navigation.navigate('StackPublic');
    }, 5000);
  }

  soal = () => {
    const page = this.state;
    const jwb = this.state;
    if (page.currentPage === 0) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian1}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body} />
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 1</Text>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal} />
                  </View>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG4/img11.png')} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal2} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier11 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier11: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier11 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier11: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="c"
                      status={jwb.tier11 === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier11: 'c'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_c} />
                    </View>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text>{item.tier2.soal}</Text>
                  <Text style={style.tier}>Tier 2</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier12 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier12: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier12 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier12: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_b}</Text>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 3</Text>
                  <View style={style.itmSoal}>
                    <HTML html={item.tier3.soal} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier13 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier13: 'a'});
                      }}
                    />
                    <View style={style.itmSoal}>
                      <HTML html={item.tier3.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier13 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier13: 'b'});
                      }}
                    />
                    <View style={style.itmSoal}>
                      <HTML html={item.tier3.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="c"
                      status={jwb.tier13 === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier13: 'c'});
                      }}
                    />
                    <View style={style.itmSoal}>
                      <HTML html={item.tier3.jwb_c} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="d"
                      status={jwb.tier13 === 'd' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier13: 'd'});
                      }}
                    />
                    <TextInput
                      style={style.input}
                      placeholder={'D. Jawaban Lain'}
                      onChangeText={txt => this.setState({tier13_e: txt})}
                    />
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 4</Text>
                  <Text>{item.tier4.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier14 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier14: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier14 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier14: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_b}</Text>
                  </View>
                </View>
                {jwb.tier11 &&
                jwb.tier12 &&
                jwb.tier13 &&
                jwb.tier14 === 'null' ? (
                  <View style={style.buttonf}>
                    <Text style={style.textbtn}>SOAL BELUM TERISI</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => this.sumbmitInc()}>
                    <Text style={style.textbtn}>LANJUT</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      );
    } else if (page.currentPage === 1) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian2}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                  <View style={style.itmBody}>
                    <HTML html={item.body1} />
                  </View>
                  <View>
                    <VideoPlayer
                      source={require('../../../asset/Video/vid32.mp4')}
                      ref={ref => {
                        this.player = ref;
                      }}
                      style={style.backgroundVideo}
                      showOnStart={false}
                    />
                    <HTML html={item.titlevideo1} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body2} />
                  </View>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG4/img41.png')} />
                    <HTML html={item.titlegambar41} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body3} />
                    <HTML html={item.body3e} />
                  </View>
                  <View>
                    <VideoPlayer
                      source={require('../../../asset/Video/vid42.mp4')}
                      ref={ref => {
                        this.player = ref;
                      }}
                      style={style.backgroundVideo}
                      showOnStart={false}
                    />
                    <HTML html={item.titlevideo42} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body4} />
                  </View>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG4/img42.png')} />
                    <HTML html={item.titlegambar42} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body5} />
                  </View>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.soal} />
                </View>
                <View style={style.inputcct}>
                  <AutoGrowingTextInput
                    placeholder={'Isi Simpulan Anda Disini'}
                    onChangeText={txt => this.setState({tier21: txt})}
                  />
                  <KeyboardSpacer />
                </View>
                {jwb.tier21 === 'null' || '' ? (
                  <View style={style.buttonf}>
                    <Text style={style.textbtn}>SOAL BELUM TERISI</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => this.sumbmitInc()}>
                    <Text style={style.textbtn}>LANJUT</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      );
    } else if (page.currentPage === 2) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian3}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.soal}>
                  <HTML html={item.pengantar} />
                  <Text style={style.tier}>Tier 1</Text>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG4/img31.png')} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier31 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier31: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier31 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier31: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier31 === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier31: 'c'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_c} />
                    </View>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 2</Text>
                  <Text>{item.tier2.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier32 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier32: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier32 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier32: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_b}</Text>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 3</Text>
                  <HTML html={item.tier3.soal} />
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier33 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier33: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier33 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier33: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="c"
                      status={jwb.tier33 === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier33: 'c'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_c} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="d"
                      status={jwb.tier33 === 'd' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier33: 'd'});
                      }}
                    />
                    <TextInput
                      style={style.input}
                      placeholder={'D. Jawaban Lain'}
                      onChangeText={txt => this.setState({tier33_e: txt})}
                    />
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 4</Text>
                  <Text>{item.tier4.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier34 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier34: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier34 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier34: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_b}</Text>
                  </View>
                </View>
                {jwb.tier31 &&
                jwb.tier32 &&
                jwb.tier33 &&
                jwb.tier34 === 'null' ? (
                  <View style={style.buttonf}>
                    <Text style={style.textbtn}>SOAL BELUM TERISI</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => this.sumbmitInc()}>
                    <Text style={style.textbtn}>LANJUT</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      );
    } else if (page.currentPage === 3) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian4}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body1} />
                  <HTML html={item.body2} />
                  <Text>Amatilah video percobaan berikut ini</Text>
                </View>
                <View>
                  <VideoPlayer
                    source={require('../../../asset/Video/vid43.mp4')}
                    ref={ref => {
                      this.player = ref;
                    }}
                    style={style.backgroundVideo}
                    showOnStart={false}
                  />
                  <HTML html={item.titlevideo1} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body3} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body4} />
                </View>
                <View style={style.soal}>
                  <View style={style.itmBody}>
                    <HTML html={item.soal1} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'1. Jawab Disini'}
                      onChangeText={txt => this.setState({tier41: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal2} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'2. Jawab Disini'}
                      onChangeText={txt => this.setState({tier42: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal3} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'3. Jawab Disini'}
                      onChangeText={txt => this.setState({tier43: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal4} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'4. Jawab Disini'}
                      onChangeText={txt => this.setState({tier44: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal5} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'5. Jawab Disini'}
                      onChangeText={txt => this.setState({tier45: txt})}
                    />
                    <KeyboardSpacer />
                  </View>
                </View>
                {(jwb.tier41 &&
                  jwb.tier42 &&
                  jwb.tier43 &&
                  jwb.tier44 === 'null') ||
                '' ? (
                  <View style={style.buttonf}>
                    <Text style={style.textbtn}>SOAL BELUM TERISI</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => this.sumbmitInc()}>
                    <Text style={style.textbtn}>LANJUT</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      );
    } else if (page.currentPage === 4) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian5}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body1} />
                  <HTML html={item.body2} />
                </View>
                <View style={style.image}>
                  <Image source={require('../../../asset/IMG4/img51.png')} />
                  <HTML html={item.titlegambar1} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body3} />
                </View>
                <TouchableOpacity
                  style={style.button}
                  onPress={() => this.sumbmitInc()}>
                  <Text style={style.textbtn}>LANJUT</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
    } else if (page.currentPage === 5) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian6}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.soal}>
                  <View style={style.itmBody}>
                    <HTML html={item.soal} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'1. Jawab Disini'}
                      onChangeText={txt => this.setState({tier61: txt})}
                    />
                  </View>
                </View>
                {jwb.tier61 === 'null' || '' ? (
                  <View style={style.buttonf}>
                    <Text style={style.textbtn}>SOAL BELUM TERISI</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => this.sumbmitInc()}>
                    <Text style={style.textbtn}>LANJUT</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      );
    } else if (page.currentPage === 6) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data4.databagian7}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body1} />
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 1</Text>
                  <View style={style.itmBody}>
                    <View style={style.image}>
                      <Text> Perhatikan gambar dibawah ini!</Text>
                      <Image
                        source={require('../../../asset/IMG4/img71.png')}
                      />
                    </View>
                    <HTML html={item.tier1.soal} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal12} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier71 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier71: 'a'});
                      }}
                    />
                    <View style={style.image}>
                      <Image
                        source={require('../../../asset/IMG4/img7a.png')}
                      />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier71 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier71: 'b'});
                      }}
                    />
                    <View style={style.image}>
                      <Image
                        source={require('../../../asset/IMG4/img7b.png')}
                      />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="c"
                      status={jwb.tier71 === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier71: 'c'});
                      }}
                    />
                    <View style={style.image}>
                      <Image
                        source={require('../../../asset/IMG4/img7c.png')}
                      />
                    </View>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 2</Text>
                  <Text>{item.tier2.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier72 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier72: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier72 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier72: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_b}</Text>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 3</Text>
                  <Text>{item.tier3.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier73 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier73: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier73 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier73: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="c"
                      status={jwb.tier73 === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier73: 'c'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_c} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="d"
                      status={jwb.tier73 === 'd' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier73: 'd'});
                      }}
                    />
                    <AutoGrowingTextInput
                      style={style.input}
                      placeholder={'D. Jawaban Lain'}
                      onChangeText={txt => this.setState({tier73_e: txt})}
                    />
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 4</Text>
                  <Text>{item.tier4.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={jwb.tier74 === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier74: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={jwb.tier74 === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({tier74: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_b}</Text>
                  </View>
                </View>
                {jwb.tier71 &&
                jwb.tier72 &&
                jwb.tier73 &&
                jwb.tier74 === 'null' ? (
                  <View style={style.buttonf}>
                    <Text style={style.textbtn}>SOAL BELUM TERISI</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.button}
                    onPress={() => this.kirimJawaban()}>
                    <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      );
    }
  };

  showMsg() {
    let waktu = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
      if (Number(this.state.seconds_Counter) === 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
      this.setState({
        minutes_Counter: count.length === 1 ? '0' + count : count,
        seconds_Counter: num.length === 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState({waktu});
    this.setState({time: true}, () =>
      timer.setTimeout(
        this,
        'hideMsg',
        () =>
          this.setState({
            time: false,
            loading: true,
            minutes_Counter: '00',
            seconds_Counter: '00',
            startDisable: false,
          }),
        5000000,
      ),
    );
  }

  render() {
    return (
      <View>
        <View>
          <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </View>
        <Loading flag={this.state.loading} />
        {this.state.time ? (
          <View>
            <View style={style.header}>
              <Text style={style.titletest}>
                Konsep Terapung, Melayang, dan Tenggelam (2)
              </Text>
              <Text style={style.titlet}>
                Waktu {this.state.minutes_Counter}:{this.state.seconds_Counter}
              </Text>
            </View>
            <View style={style.mainbody}>
              <ScrollView style={style.scrollview}>
                <View style={style.viewindicator}>
                  <StepIndicator
                    stepCount={7}
                    renderStepIndicator={this.renderStepIndicator}
                    customStyles={secondIndicatorStyles}
                    currentPosition={this.state.currentPage}
                    direction={'vertical'}
                    onPress={this.onStepPress}
                  />
                </View>
              </ScrollView>
              {this.soal()}
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={style.button}
            onPress={() => requestAnimationFrame(() => this.showMsg())}>
            <Text style={style.textbtn}>MULAI</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  onStepPress = position => {
    this.setState({currentPage: position});
    // this.indicatorviewPager.setPage(position);
  };

  renderViewPagerPage = data => {
    return (
      <View style={styles.page}>
        <Text>{data} haha</Text>
      </View>
    );
  };

  renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
});
