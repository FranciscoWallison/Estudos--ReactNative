import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class SectionListClass extends Component {

  constructor(props){
    super(props);
    this.state = {
      listData:[
          {title: 'A',
            data: [
              {key:'1', nome: 'Wallison', idade:90}
            ]
          },
          {title: 'B',
            data: [
              {key: '2', nome: 'Francisco', idade:23},
              {key: '3', nome: 'Teste5', idade:34},
              {key: '4', nome: 'Teste7', idade:26}
            ]
          },
          {title: 'C',
            data: [
              {key: '5', nome: 'Francisco6', idade:78},
              {key: '6', nome: 'Teste8', idade:55},
              {key: '7', nome: 'Teste9', idade:37},
              {key: '8', nome: 'Teste10', idade:28}
            ]
          }
      ]
    };
  }

  listSectionRender(section){
    return(
      <Text style={styles.section}>
        Letra: {section.title}
      </Text>
    );
  }

  listRender(item){
    return(
      <Text style={styles.item}> 
        {item.nome} - {item.idade} anos
      </Text>
    );
  }

  render(){
    return(
      <View style={styles.body}>
        <SectionList sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  body: {
    paddingTop:20,
    flex:1
  },
  item:{
    fontSize:18,
    height:40,
    padding:10
  },
  section:{
    fontSize:14,
    backgroundColor: '#CCCCCC',
    padding:10
  }
})