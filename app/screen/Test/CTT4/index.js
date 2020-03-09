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
// import ViewPager from '@react-native-community/viewpager';
// import {IndicatorViewPager} from 'react-native-best-viewpager';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import YouTube from 'react-native-youtube';
import data3 from '../../../utilisasi/data3';
import style from './style';

const secondIndicatorStyles = {
  stepIndicatorSize: 37,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 6,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 4,
  separatorStrokeFinishedWidth: 5,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#fe7013',
};

const getStepIndicatorIconConfig = ({position, stepStatus}) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 20,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'shopping-cart';
      break;
    }
    case 1: {
      iconConfig.name = 'location-on';
      break;
    }
    case 2: {
      iconConfig.name = 'assessment';
      break;
    }
    case 3: {
      iconConfig.name = 'payment';
      break;
    }
    case 4: {
      iconConfig.name = 'directions-boat';
      break;
    }
    case 5: {
      iconConfig.name = 'ac-unit';
      break;
    }
    case 6: {
      iconConfig.name = 'directions-boat';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
      checked: 'first',
      isPlaying: true,
      isLooping: true,
      fullscreen: false,
    };
  }

  soal = () => {
    const page = this.state;
    const {checked} = this.state;
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
                  <Text style={style.tier}>Tier 1:</Text>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal2} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="c"
                      status={checked === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'c'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_c} />
                    </View>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text>{item.tier2.soal}</Text>
                  <Text style={style.tier}>Tier 2:</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_b}</Text>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 3:</Text>
                  <View style={style.itmSoal}>
                    <HTML html={item.tier3.soal} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmSoal}>
                      <HTML html={item.tier3.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <View style={style.itmSoal}>
                      <HTML html={item.tier3.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'c'});
                      }}
                    />
                    <View style={style.itmSoal}>
                      <HTML html={item.tier3.jwb_c} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'c'});
                      }}
                    />
                    <TextInput
                      style={style.input}
                      placeholder={'D. Jawaban Lain'}
                    />
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 4:</Text>
                  <Text>{item.tier4.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_b}</Text>
                  </View>
                </View>
                <TouchableOpacity style={style.button}>
                  <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
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
                    <YouTube
                      videoId="tWWuYBdi2eA"
                      apiKey="AIzaSyCs0MWSrT-_Jbw0KQWaVR756AsiANxgmb8"
                      play={this.state.isPlaying}
                      loop={this.state.isLooping}
                      // onReady={true}
                      // onChangeState={e => this.setState({status: e.state})}
                      // onChangeQuality={e => this.setState({quality: e.quality})}
                      // onError={e => this.setState({error: e.error})}
                      fullscreen={this.state.fullscreen}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{alignSelf: 'stretch', height: 300, width: 300}}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body2} />
                  </View>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG3/img31.png')} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body3} />
                  </View>
                  <View>
                    <YouTube
                      videoId="tWWuYBdi2eA"
                      apiKey="AIzaSyCs0MWSrT-_Jbw0KQWaVR756AsiANxgmb8"
                      play={this.state.isPlaying}
                      loop={this.state.isLooping}
                      // onReady={true}
                      // onChangeState={e => this.setState({status: e.state})}
                      // onChangeQuality={e => this.setState({quality: e.quality})}
                      // onError={e => this.setState({error: e.error})}
                      fullscreen={this.state.fullscreen}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{alignSelf: 'stretch', height: 300, width: 300}}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.body4} />
                  </View>
                  <View style={style.image}>
                    <Image source={require('../../../asset/IMG3/img32.png')} />
                  </View>
                  <Text> Selanjutnya amatilah Video3.3 berikut ini: </Text>
                  <View>
                    <YouTube
                      videoId="tWWuYBdi2eA"
                      apiKey="AIzaSyCs0MWSrT-_Jbw0KQWaVR756AsiANxgmb8"
                      play={this.state.isPlaying}
                      loop={this.state.isLooping}
                      // onReady={true}
                      // onChangeState={e => this.setState({status: e.state})}
                      // onChangeQuality={e => this.setState({quality: e.quality})}
                      // onError={e => this.setState({error: e.error})}
                      fullscreen={this.state.fullscreen}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{alignSelf: 'stretch', height: 300, width: 300}}
                    />
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
                <View style={style.input}>
                  <TextInput placeholder={'Isi Simpulan Anda Disini'} />
                </View>
                <TouchableOpacity style={style.button}>
                  <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
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
                  <Text style={style.tier}>Tier 1:</Text>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_c} />
                    </View>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 2:</Text>
                  <Text>{item.tier2.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_b}</Text>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 3:</Text>
                  <HTML html={item.tier3.soal} />
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_c} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'c'});
                      }}
                    />
                    <TextInput
                      style={style.input}
                      placeholder={'D. Jawaban Lain'}
                    />
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 4:</Text>
                  <Text>{item.tier4.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_b}</Text>
                  </View>
                </View>
                <TouchableOpacity style={style.button}>
                  <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
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
                </View>
                <Text style={style.itmtitle}>
                  Amatilah video percobaan berikut ini
                </Text>
                <View>
                  <YouTube
                    videoId="i9qtJ-4RUyk"
                    apiKey="AIzaSyCs0MWSrT-_Jbw0KQWaVR756AsiANxgmb8"
                    play={this.state.isPlaying}
                    loop={this.state.isLooping}
                    // onReady={true}
                    // onChangeState={e => this.setState({status: e.state})}
                    // onChangeQuality={e => this.setState({quality: e.quality})}
                    // onError={e => this.setState({error: e.error})}
                    fullscreen={this.state.fullscreen}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{alignSelf: 'stretch', height: 300, width: 300}}
                  />
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
                    <TextInput
                      style={style.inputessay}
                      placeholder={'1. Jawab Disini'}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal2} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'2. Jawab Disini'}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal3} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'3. Jawab Disini'}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal4} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'4. Jawab Disini'}
                    />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.soal5} />
                    <TextInput
                      style={style.inputessay}
                      placeholder={'5. Jawab Disini'}
                    />
                  </View>
                </View>
                <TouchableOpacity style={style.button}>
                  <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
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
                  <YouTube
                    videoId="i9qtJ-4RUyk"
                    apiKey="AIzaSyCs0MWSrT-_Jbw0KQWaVR756AsiANxgmb8"
                    play={this.state.isPlaying}
                    loop={this.state.isLooping}
                    // onReady={true}
                    // onChangeState={e => this.setState({status: e.state})}
                    // onChangeQuality={e => this.setState({quality: e.quality})}
                    // onError={e => this.setState({error: e.error})}
                    fullscreen={this.state.fullscreen}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{alignSelf: 'stretch', height: 300, width: 300}}
                  />
                </View>
                <View style={style.itmBody}>
                  <HTML html={item.body5} />
                </View>
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
                    <TextInput
                      style={style.inputessay}
                      placeholder={'1. Jawab Disini'}
                    />
                  </View>
                </View>
                <TouchableOpacity style={style.button}>
                  <Text style={style.textbtn}>SUBMIT JAWABAN</Text>
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
                  <Text style={style.tier}>Tier 1:</Text>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal} />
                  </View>
                  <View style={style.itmBody}>
                    <HTML html={item.tier1.soal12} />
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier1.jwb_c} />
                    </View>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 2:</Text>
                  <Text>{item.tier2.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier2.jwb_b}</Text>
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 3:</Text>
                  <Text>{item.tier3.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_a} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_b} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <View style={style.itmBody}>
                      <HTML html={item.tier3.jwb_c} />
                    </View>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'c' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'c'});
                      }}
                    />
                    <TextInput
                      style={style.input}
                      placeholder={'D. Jawaban Lain'}
                    />
                  </View>
                </View>
                <View style={style.soal}>
                  <Text style={style.tier}>Tier 4:</Text>
                  <Text>{item.tier4.soal}</Text>
                  <View style={style.answer}>
                    <RadioButton
                      value="a"
                      status={checked === 'a' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'a'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_a}</Text>
                  </View>
                  <View style={style.answer}>
                    <RadioButton
                      value="b"
                      status={checked === 'b' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        this.setState({checked: 'b'});
                      }}
                    />
                    <Text style={style.jawaban}>{item.tier4.jwb_b}</Text>
                  </View>
                </View>
                <TouchableOpacity style={style.button}>
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
                labels={[
                  'Bag 1',
                  'Bag 2',
                  'Bag 3',
                  'Bag 4',
                  'Bag 5',
                  'Bag 6',
                  'Bag 7',
                ]}
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

  renderLabel = ({position, stepStatus, label, currentPosition}) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }>
        {label}
      </Text>
    );
  };
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
