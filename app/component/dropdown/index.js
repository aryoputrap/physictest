import React, {Component} from 'react';
import {View, Picker} from 'react-native';

class status extends Component {
  constructor() {
    super();
    this.state = {
      ket: ['STS', 'TS', 'S', 'SS'],
    };
  }
  render() {
    const {data, styles, key, onChange} = this.props;
    return (
      <View style={styles}>
        <Picker
          key={key}
          mode={'dropdown'}
          selectedValue={data}
          onValueChange={onChange}>
          <Picker.Item color="grey" label={'Kategori'} value="" />
          {this.state.ket.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
