import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class PrimeiroProjeto extends Component {

  render(){

    let imagem = {
      uri:'https://avatars3.githubusercontent.com/u/19413241?s=460&v=4' 
    };

   return (
     <View>
       <Text>Olá Mundo</Text>
       <Text>Olá Mundo</Text>
       <Text>Olá Mundo</Text>
       <Text style={{fontSize:25, color:'red', margin:20}}>Olá Mundo</Text>
       <Image source={imagem} style={{ width:300, height:300 }}/>
     </View>
     
   ); 
  }
}
