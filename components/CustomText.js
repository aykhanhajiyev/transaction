import React from 'react';
import {Text, StyleSheet} from 'react-native';
import COLORS from '../commons/colors';

export const CustomText = ({children, style, size, ...rest}) => {
  return (
    <Text {...rest} style={[styles.text,{fontSize: size}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: COLORS.textColor,
    paddingVertical: 8,
  },
});
