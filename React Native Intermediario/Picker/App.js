import React, { Component } from 'react'
import { View, StyleSheet, Picker, Text } from 'react-native'

export default class PickerClass extends Component{

  constructor(props){
    super(props);
    this.state = {
      service:0,
      services:[
        {nome:'Alinhamento', valor:30},
        {nome:'Balanceamento', valor:20},
        {nome:'Rodízio de Pneus', valor:50},
        {nome:'Dar uma voltinha', valor:10},
      ]
    };
  }

  render() {

    let servicesItens = this.state.services.map((v, k)=> {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.body}>
        <Text style={styles.logo}>Autopeças Chico</Text>
        <Picker selectedValue={this.state.service} onValueChange={(itemValue, itemIndex)=>this.setState({service:itemValue})}>
          {servicesItens}
        </Picker>
    <Text style={styles.values}>R$ {this.state.services[this.state.service].valor}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop:20,
    backgroundColor:"#DDDDDD",
    flex:1
  },
  logo:{
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  values:{
    fontSize:26,
    textAlign:'center',
    marginBottom:20
  }
  
})