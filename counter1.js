import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class counter1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('counter 1 is called...');
    return (
      <View>
        <Text>counter1 is {this.props.value}</Text>
        <Button onClick={this.props.onClick} title="Add me" />
      </View>
    );
  }
}
export default counter1;
