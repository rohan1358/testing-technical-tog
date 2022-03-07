import {View, Text} from 'react-native';
import React from 'react';

const Base = props => {
  return (
    <View {...props} style={{backgroundColor: 'white', ...props.style}}>
      {props.children}
    </View>
  );
};

export default Base;
