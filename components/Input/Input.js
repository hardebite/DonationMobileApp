import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import globalStyle from '../../assets/styles/globalstyle';
import style from './style';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        autoFocus={true}
        placeholder={props.placeholder ? props.placeholder : null}
        style={style.input}
        value={value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};
Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
};
export default Input;
