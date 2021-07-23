import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/Styles';

export default function Footer(){
    return(
        <View style={styles.header}>
            <Text style={styles.footerText}>
                SoulCode-Dev=='RodrigoRauen'
            </Text>
        </View>
    )
}