import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';

import COLORS from '../commons/colors';

export const CustomInput = ({icon=null,...rest}) => {
  return (
      <View style={styles.container}>
        {/* TODO: add Search icon */}
        {icon}
        <TextInput placeholder="Search" style={styles.textInput} {...rest} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 32,
    height: 45,
    borderWidth: 7,
    borderColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    height: 45,
  },
});
