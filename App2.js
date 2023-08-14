import React from 'react';
import ClassComponent from './ClassComponent';
import {View, Text, Button, TouchableOpacity} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(() => ({
      count: this.state.count + 1,
    }));
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>learning life cycle method</Text>
        <ClassComponent />
        <Button title="Click" onPress={() => this.increment()} />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}

export default App;
