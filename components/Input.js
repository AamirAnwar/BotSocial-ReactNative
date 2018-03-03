import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        autoCapitalize='none'
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight : 23,
    width:null,
    flex:1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    // backgroundColor: 'red',
    height:44
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft:20,
    // backgroundColor: 'blue'
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  }
}

export default Input;
