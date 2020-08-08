import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import COLORS from '../commons/colors';

export const Line = () => {
  return <View style={styles.line}/>;
};

const styles = StyleSheet.create({
  line: {
    borderColor:COLORS.lineColor,
    borderWidth:1,
    marginVertical:5
  },
});
