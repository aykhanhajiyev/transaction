import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { TransactionScreen, TransactionDetailsScreen } from '../screens';
import { Text } from 'react-native';

const {Navigator,Screen} = createStackNavigator();

export const RootNav=()=>{
    return(
        <Navigator headerMode="none">
            <Screen name="TransactionsList" component={TransactionScreen}/>
            <Screen name="TransactionDetails" component={TransactionDetailsScreen}/>
        </Navigator>
    )
}