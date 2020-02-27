import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  // ScrollView,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import styles from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 1,
    };
  }

  onPageChange(position) {
    this.setState({currentPosition: position});
  }

  render() {
    const labels = ['Tahap 1', 'Tahap 2', 'Tahap 3', 'Tahap 4'];
    const customStyles = {
      stepIndicatorSize: 50,
      currentStepIndicatorSize: 30,
      separatorStrokeWidth: 1,
      currentStepStrokeWidth: 2,
      stepStrokeCurrentColor: '#fe7013',
      stepStrokeWidth: 3,
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
      labelSize: 13,
      currentStepLabelColor: '#fe7013',
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.opening}>
          <Image
            source={require('../../asset/astronot.png')}
            style={styles.imageastronot}
            resizeMode={'contain'}
          />
          <View style={styles.viewklik}>
            <Text style={styles.textopening}>Ayooo Mulai Test !</Text>
            <TouchableOpacity style={styles.tombolklik}>
              <Text style={styles.texttombol}> Klik Disini !</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewindicator}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={this.state.currentPosition}
            labels={labels}
            direction={'vertical'}
          />
        </View>

        {/* <ScrollView style={styles.containerscrol}>
          <TouchableOpacity style={styles.tombolkliktahap}>
            <Text style={styles.texttomboltahap}> Tahap 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tombolkliktahap}>
            <Text style={styles.texttomboltahap}> Tahap 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tombolkliktahap}>
            <Text style={styles.texttomboltahap}> Tahap 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tombolkliktahap}>
            <Text style={styles.texttomboltahap}> Tahap 4</Text>
          </TouchableOpacity>
        </ScrollView> */}
      </SafeAreaView>
    );
  }
}
