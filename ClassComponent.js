import React from 'react';
import {View, Text, Button} from 'react-native';

class ClassComponent extends React.Component {
  constructor(props) {
    console.log('inside constructor');
    super(props);
    this.state = {
      products: [],
    };
  }
  static getDrivedFromProps(props, state) {
    console.log('inside getDrivedFromProps');
    return null;
  }
  render() {
    console.log('inside render');
    console.log('json data: ', this.state.products);
    return (
      <View>
        <Text>hello world</Text>
        {/* <Text>{this.state.products}</Text> */}
      </View>
    );
  }

  componentDidMount() {
    console.log('inside componentDidMount');
    fetch('https://fakestoreapi.com/products/1')
      .then(response => response.json())
      .then(json =>
        this.setState({
          products: JSON,
        }),
      );
  }
}

export default ClassComponent;
