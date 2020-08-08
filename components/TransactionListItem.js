import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import COLORS from '../commons/colors';

export const TransactionListItem = ({item,onPress}) => {
  const {
    name,
    surname,
    transactionValue,
    paymentDate,
    type,
    payWith,
    imgUrl,
  } = item;
  return (
    <TouchableOpacity onPress={()=>onPress(item)}>
      <View style={styles.listItem}>
        <View style={styles.userDetails}>
          <Image source={{uri: imgUrl,cache:'only-if-cached'}} style={styles.image}  />
          <Text style={styles.fullName}>{`${name} ${surname}`}</Text>
        </View>
        <Text style={styles.transactionValue}>{`${transactionValue.toFixed(
          2,
        )} AZN`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems:'center',
  },
  fullName: {
      paddingLeft:20
  },
  transactionValue: {
      color:COLORS.valueColor,
      fontWeight:'bold'
  },
});
