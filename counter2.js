import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class counter2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('counter 2 is called...');
    return (
      <View>
        <Text>counter2 is {this.props.value}</Text>
        <Button onClick={this.props.onClick} title="Add me" />
      </View>
    );
  }
}
export default counter2;
