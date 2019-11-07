import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PrimeiroProjeto extends Component {

  render(){

    return (
      <View style={{ flex:1, backgroundColor:'green'}}>        
        {/* <View style={{ width:50, height:50, backgroundColor:'blue' }}></View>
        <View style={{ width:100, height:100, backgroundColor:'green' }}></View>
        <View style={{ width:200, height:200, backgroundColor:'red' }}></View> */}
        
        {/* <Text>Este é um texto qualquer</Text> */}

        
        <View style={{ height:70, backgroundColor:'green' }}></View>
        <View style={{ flex:1, backgroundColor:'yellow' }}></View>
        <View style={{ height:50, backgroundColor:'red' }}></View>

      </View>

    ); 
  }
}
