import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';


export default class PrimeiroProjeto extends Component {

  constructor(props){
    super(props);
    this.state = {
      flatData:[
        {key: "1", nome: 'Wallison', idade:24},
        {key: "2", nome: 'Wallison1', idade:25},
        {key: "3", nome: 'Francisco', idade:26},
        {key: "4", nome: 'Francisco2', idade:27},
        {key: "5", nome: 'Francisco3', idade:28},
        {key: "6", nome: 'Francisco4', idade:29},
        {key: "7", nome: 'Francisco5', idade:30}
      ]
    };
  }

  flatRender(item){
    return (
      <View style={styles.flatItem}>
        <Text style={styles.flatItemNome}>{item.nome}</Text>
        <Text style={styles.flatItemIdade}>{item.idade} anos</Text>
      </View>
      
    );
  }

  render(){
    return (
      <View style={styles.body}>
        {/* 'Data' recebe json com os dados dos components */}
        {/* 'RenderItem' renderiza os components */}
        <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({item})=> this.flatRender(item) }/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20
  },
  flatItemNome:{
    fontSize:18,
    height:40
  },
  flatItemIdade:{
    fontSize:14,
    height:40
  },
  flatItem:{    
    padding:8,
    borderWidth:1,
    borderColor: '#000000'
  },
  flatList:{
    backgroundColor: '#FF0000',
    height:150
  }
})