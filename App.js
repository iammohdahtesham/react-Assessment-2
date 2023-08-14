import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {count: 0};
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('inside getSnapshotBeforeUpdate');
    return null;
  }
  shouldComponentUpdate(nextProp, nextState) {
    console.log('insdie shouldComponentUpdate');
    return true;
  }
  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  };

  render() {
    console.log('Render');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.state.count}</Text>
        <Button title="Increase Count" onPress={this.increaseCount} />
      </View>
    );
  }
}

export default App;
