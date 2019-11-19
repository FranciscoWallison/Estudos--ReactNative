import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native'

class Botao extends Component {

  constructor(props){
    super(props);
    this.stat = {};
    this.style = StyleSheet.create({
      botao: {
        width:250,
        height:50,
        borderWidth:2,
        borderColor: props.color,
        backgroundColor: 'transparent',
        borderRadius:25
      },
      botaoArea:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoText:{
        color: props.color,
        fontSize:14,
        fontWeight:'bold'
      }
    });
  }
  render(){
    return (
      <TouchableOpacity style={this.style.botao} onPress={this.props.onPress}>
        <View style={this.style.botaoArea}>
          <Text style={this.style.botaoText}>
            {this.props.texto}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class PrimeiroProjeto extends Component {
  
  constructor(props){
    super(props);
    this.state = {texto: 'Algum Texto....'}  
    this.frases = ['teste1', 'teste2', 'teste3'];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito(){
    let s = this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }
  
  render(){
    return (
      <View style={styles.body}>
        <Image source={require('./images/download.jpg')} />

        <Text style={styles.texto}>"{this.state.texto}"</Text>

        <Botao color="#B59619" texto="Quebrar Biscoito" onPress={this.quebrarBiscoito} />
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  body: {
    paddingTop:20,
    backgroundColor:'#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto:{
    fontSize:17,
    color: '#B59619',
    margin: 30,
    fontStyle:'italic'
  }
})