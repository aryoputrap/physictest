import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import HTML from 'react-native-render-html';
import VideoPlayer from 'react-native-video-controls';
// import ViewPager from '@react-native-community/viewpager';
// import {IndicatorViewPager} from 'react-native-best-viewpager';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import data3 from '../../../utilisasi/data3';
import style from '../style_ctt';

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
      currentPage: 0,
      checked: 'first',
      isPlaying: true,
      isLooping: true,
      fullscreen: false,
      tier11: '',
      tier12: '',
      tier13: '',
      tier13_e: '',
      tier14: '',
      tier21: '',
      tier31: '',
      tier32: '',
      tier33: '',
      tier33_e: '',
      tier34: '',
      tier41: '',
      tier42: '',
      tier43: '',
      tier44: '',
      tier45: '',
      tier61: '',
      tier71: '',
      tier72: '',
      tier73: '',
      tier73_e: '',
      tier74: '',
    };
  }

  sumbmitInc = () => {
    this.setState(prevState => ({currentPage: prevState.currentPage + 1}));
  };

  kirimJawaban = async () => {
    const jwb = this.state;
    const user = {
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
    const tokenx = await AsyncStorage.getItem('token');
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/isiSaldo/validasi',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.data;
        this.dropDownAlertRef.alertWithType(
          'success',
          'Mohon diperiksa kembali !',
          response.data.message,
        );
        console.log(response);
        this.onSuccessUpdate();
      })
      .catch(error => {
        console.log(error.response.data.message);
        this.dropDownAlertRef.alertWithType(
          'warn',
          'Mohon diperiksa kembali !',
          error.response.data.message,
        );
      });
  };

  soal = () => {
    const page = this.state;
    const jwb = this.state;
    if (page.currentPage === 0) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data3.databagian1}
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
                    <AutoGrowingTextInput
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
    } else if (page.currentPage === 1) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data3.databagian2}
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
                      source={require('../../../asset/Video/vid31.mp4')}
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
                    <Image source={require('../../../asset/IMG3/img31.png')} />
                    <HTML html={item.titlegambar1} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body3} />
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
                    <HTML html={item.titlevideo2} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body4} />
                  </View>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG3/img32.png')} />
                    <HTML html={item.titlegambar2} />
                  </View>
                  <Text> Selanjutnya amatilah Video3.3 berikut ini: </Text>
                  <View>
                    <VideoPlayer
                      source={require('../../../asset/Video/vid33.mp4')}
                      ref={ref => {
                        this.player = ref;
                      }}
                      style={style.backgroundVideo}
                      showOnStart={false}
                    />
                    <HTML html={item.titlevideo3} />
                  </View>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body5} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body6} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.soal} />
                </View>
                <View style={style.inputcct}>
                  <AutoGrowingTextInput
                    placeholder={'Isi Simpulan Anda Disini'}
                    onChangeText={txt => this.setState({tier21: txt})}
                  />
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
    } else if (page.currentPage === 2) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data3.databagian3}
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
                      value="b"
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
                      value="c"
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
                    <AutoGrowingTextInput
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
    } else if (page.currentPage === 3) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data3.databagian4}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View>
                  <Text style={style.itmtitle}>{item.bab}</Text>
                  <Text style={style.itmtitle}>{item.title}</Text>
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body1} />
                  <Text>Amatilah video percobaan berikut ini</Text>
                </View>
                <View>
                  <VideoPlayer
                    source={require('../../../asset/Video/vid34.mp4')}
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
                <View style={style.itmBody}>
                  <HTML html={item.body3} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body4} />
                </View>
                <View style={style.soal}>
                  <View style={style.itmBody}>
                    <HTML html={item.soal1} />
                    <AutoGrowingTextInput
                      style={style.inputessay}
                      placeholder={'1. Jawab Disini'}
                      onChangeText={txt => this.setState({tier41: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal2} />
                    <AutoGrowingTextInput
                      style={style.inputessay}
                      placeholder={'2. Jawab Disini'}
                      onChangeText={txt => this.setState({tier42: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal3} />
                    <AutoGrowingTextInput
                      style={style.inputessay}
                      placeholder={'3. Jawab Disini'}
                      onChangeText={txt => this.setState({tier43: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal4} />
                    <AutoGrowingTextInput
                      style={style.inputessay}
                      placeholder={'4. Jawab Disini'}
                      onChangeText={txt => this.setState({tier44: txt})}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal5} />
                    <AutoGrowingTextInput
                      style={style.inputessay}
                      placeholder={'5. Jawab Disini'}
                      onChangeText={txt => this.setState({tier45: txt})}
                    />
                  </View>
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
    } else if (page.currentPage === 4) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data3.databagian5}
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
                <View style={style.itmBody}>
                  <HTML html={item.body2} />
                  <HTML html={item.body3} />
                  <HTML html={item.body4} />
                </View>
                <View>
                  <VideoPlayer
                    source={require('../../../asset/Video/vid35.mp4')}
                    ref={ref => {
                      this.player = ref;
                    }}
                    style={style.backgroundVideo}
                    showOnStart={false}
                  />
                  <HTML html={item.titlevideo1} />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body5} />
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
            data={data3.databagian6}
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
                    <AutoGrowingTextInput
                      style={style.inputessay}
                      placeholder={'1. Jawab Disini'}
                      onChangeText={txt => this.setState({tier61: txt})}
                    />
                  </View>
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
    } else if (page.currentPage === 6) {
      return (
        <View style={style.containdata}>
          <FlatList
            key="flatList"
            style={style.flatlist}
            data={data3.databagian7}
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
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_a} />
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
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_b} />
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
                <TouchableOpacity
                  style={style.button}
                  onPress={() => this.kirimJawaban()}>
                  <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <View style={style.header}>
          <Text style={style.titletest}>
            Konsep Terapung, Melayang, dan Tenggelam (1)
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
