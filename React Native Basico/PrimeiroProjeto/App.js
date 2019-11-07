import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor(props){
    super(props);
    this.state = {texto: ''};

    this.mudarTexto = this.mudarTexto.bind(this);
  }

  mudarTexto(t){
    let s = this.state;
    s.texto = t.length > 0 ? s.texto = 'Olá, '+t : '';  
    //s.texto = 'Olá, '+t;

    this.setState(s);
  }

  render(){
    return (
      <View style={{paddingTop:30}}>
        <TextInput style={styles.input} placeholder="Qual seu nome?" onChangeText={this.mudarTexto}/>

        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>

    ); 
  }
}

const styles = StyleSheet.create({
  input: {
    height:40,
    borderWidth:1,
    borderColor: '#000000',
    margin:10,
    padding:10
  },
  texto: {
    fontSize: 20,
    textAlign: 'center'
  }
});