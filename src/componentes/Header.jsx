import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/Styles';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>
                MyCalc
            </Text>
        </View>
    )
}