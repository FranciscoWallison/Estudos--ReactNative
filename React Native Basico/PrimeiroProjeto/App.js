import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Imagem extends Component {
  render(){

    let imagem = {
      uri: 'https://avatars3.githubusercontent.com/u/'+this.props.nome+'?s=460&v=4'
    }
    return (
      <Image source={imagem} style={{width:parseInt(this.props.largura), height:parseInt(this.props.altura)}} />
    );
  }
}

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
       <Imagem nome='19413241' largura='250' altura='250' />      
     </View>
     
   ); 
  }
}
