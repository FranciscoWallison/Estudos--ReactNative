import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PrimeiroProjeto extends Component {

  render(){

    return (
      <View style={styles.padrao}>        
        <Text style={styles.azulGrande}>Este é o texto 1</Text>
        <Text style={styles.vermelhor}>Este é o texto 2</Text>
        <Text style={[styles.vermelhor, styles.azulGrande]}>Este é o texto 3</Text>
        <Text style={[styles.azulGrande, styles.vermelhor]}>Este é o texto 4</Text>
      </View>

    ); 
  }
}

const styles = StyleSheet.create({
  padrao: {
    paddingTop:20,
    backgroundColor:'#00FF00'
  },
  azulGrande: {
    color: '#0000FF',
    fontSize:30,
    textAlign:'center'
  },
  vermelhor: {
    color: '#FF0000',
    fontSize:15
  }
  
});