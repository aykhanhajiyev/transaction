import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';

import {getTransactions} from '../store/transactions';
import {
  CustomInput,
  ProgressBars,
  CustomText,
  Line,
  TransactionList,
} from '../components';
import COLORS from '../commons/colors';
import SearchImage from '../assets/icons/search.png';

// Getting Data From Store Redux
const mapStateToProps = (state) => ({
  transactions: getTransactions(state),
});

export const TransactionScreen = connect(mapStateToProps, {getTransactions})(
  ({transactions, navigation}) => {
    const [filteredTransaction, setFilteredTransaction] = useState([]);
    const [searchText, setSearchText] = useState('');

    const filterTransactionHandler = (text) => {
      setSearchText(text);
      const textInput = searchText.toLowerCase();
      let filtered = transactions.filter((transaction) => {
        if (
          transaction.name.toLowerCase().indexOf(textInput) > -1 ||
          transaction.surname.toLowerCase().indexOf(textInput) > -1 ||
          transaction.transactionValue.toString().indexOf(textInput) >-1
        ) {
          return transaction;
        }
      });
      setFilteredTransaction(filtered);
    };
    return (
      <View style={styles.container}>
        {/* Header Transactions Text */}
        <CustomText size={25}>Transactions</CustomText>
        {/* SeachBar Input */}
        <CustomInput
          icon={<Image source={SearchImage} style={{width: 12, height: 12}} />}
          value={searchText}
          onChangeText={(text) => filterTransactionHandler(text)}
        />
        {/* Performance Text */}
        <CustomText size={18}>Performance</CustomText>
        <Line />
        {/* ProgressBars */}
        {/* Sending values by order Ex:30 - Current Week - Light Green*/}
        <ProgressBars
          values={[30, 40, 90]}
          headers={['Current Week', 'Last Week', 'Last Month']}
          colors={[COLORS.lightGreen, COLORS.lightRed, COLORS.lightBlue]}
        />

        <CustomText size={18}>Transactions</CustomText>
        <Line />
        {/* Transactions if search text is null full transaction data send else send filtered transaction*/}
        <TransactionList transactions={(searchText==="" ? transactions : filteredTransaction)} navigation={navigation} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
});
