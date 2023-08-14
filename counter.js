import React, {useState} from 'react';
import counter1 from './counter1';
import counter2 from './counter2';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const counter = () => {
  // const [counter1, setCounter1] = useState(0);
  // const increseCounter1 = () => {
  //   setCounter1(counter1 + 1);
  // };
  // const [counter2, setCounter2] = useState(0);

  // const increseCounter2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  return (
    <View>
      <counter1 value={counter1} onClick={increseCounter1} />
      <counter2 value={counter2} onClick={increseCounter2} />
    </View>
  );
};
export default counter;
