import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';
import Calc from './src/componentes/Content';
import Footer from './src/componentes/Footer';



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Calc/>
      <Footer/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
  },
});
