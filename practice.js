// import React from 'react';

// import {View, Text, Button} from 'react-native';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: true,
//       count: 0,
//       message:"hello"
//     };
    this.bindfunction = this.test.bind(this.testObj);
//   }

  testObj = {
    key1: 'value1',
    key2: 'value2',
  };

  test() {
    console.log(this);
  }

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>hello world</Text>
//         <Text>{this.state.message}</Text>
//         {this.state.isVisible && <Text>Hello Appinventive</Text>}
//         <Text> {this.state.count}</Text>
//         <Button
//           title="Click"
//           onPress={() =>
//             this.setState({
//               isVisible: !this.state.isVisible,
//               count: this.state.count + 1,
//             })
//           }
//         />
        {this.test.call(this.testObj)}
//       </View>
//     );
//   }
// }
// export default App;
