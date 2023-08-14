import React from 'react';

import {View, Text, Button} from 'react-native';

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      message: 'Initial Message',
    };
    this.bindedFunction = this.func.bind(this.obj1);
  }

  // static getDerivedStateFromProps(props, state) {
  //   return (this.state = {
  //     message: 'Changed',
  //   });
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>
        this.setState({
          message: data.filter(item => {
            //using .filter method of array to filter out data as required
            console.log(
              ` Name: ${item.name}\n Email: ${item.email}\n Phone No.: ${item.phone}\n Company Name: ${item.company.name}\n`,
            );
          }),
        }),
      )
      .catch(err => console.log('Error Occured ' + err));
  }

  obj1 = {
    key1: 'value1',
  };

  func() {
    console.log(this);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World!</Text>

        <Text>{this.state.message}</Text>

        {!this.state.isVisible && <Text>Hello Appinventiv!</Text>}
        <Button
          title="Click me to display"
          onPress={() =>
            this.setState({
              isVisible: !this.state.isVisible,
            })
          }
        />
        {this.bindedFunction()}
      </View>
    );
  }
}

export default Practice;
