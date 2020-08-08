import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomText, CustomButton, Line} from '../components';

export const TransactionDetailsScreen = ({route}) => {
  const {
    name,
    surname,
    transactionValue,
    paymentDate,
    type,
    payWith,
    imgUrl,
  } = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Back button</Text>
        <CustomText size={22}>{`${name} ${surname}`}</CustomText>
      </View>
      <View style={styles.priceContainer}>
        <CustomText size={25}>{`${transactionValue} AZN`}</CustomText>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton title="Card" />
        <CustomButton title="Debt" />
      </View>
      <Text style={{paddingVertical: 10}}>
        I didn't have any time to design this screen I'm sorry :(
      </Text>
      <CustomText size={18}>Transaction Detail</CustomText>
      <Line />
      <CustomText size={18} style={styles.innerText}>Payment Detail: {`${paymentDate}`}</CustomText>
      <Line />
      <CustomText size={18} style={styles.innerText}>Type: {`${type}`}</CustomText>
      <Line />
      <CustomText size={18} style={styles.innerText}>PayWith: {`${payWith}`}</CustomText>
      <Line />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  innerText:{
      fontWeight:"normal"
  }
});
