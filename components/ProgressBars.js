import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ProgressCircle from 'react-native-progress-circle';
import COLORS from '../commons/colors';

export const ProgressBars = ({values = [], headers = [], colors = []}) => {
  return (
    <View style={styles.container}>
      {values.map((value, i) => (
        <View style={styles.circleContainer} key={i}>
            <Text style={styles.headerText}>{headers[i]}</Text>
          <ProgressCircle
            percent={value}
            radius={50}
            borderWidth={8}
            color={colors[i]}
            shadowColor={COLORS.lineColor}
            bgColor="#fff">
            <Text style={{fontSize: 18}}>{`${value}%`}</Text>
          </ProgressCircle>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circleContainer:{
      paddingHorizontal:10
  },
  headerText:{
      fontSize:14,
      color:COLORS.lightGray,
      alignSelf:'center',
      paddingVertical:12
  }
});
