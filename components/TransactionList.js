import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {TransactionListItem} from './TransactionListItem';

export const TransactionList = ({transactions,navigation}) => {
    const onPressDetailsHandler = (item)=>{
        navigation.navigate("TransactionDetails",{item});
    }
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionListItem item={item} onPress={onPressDetailsHandler} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
