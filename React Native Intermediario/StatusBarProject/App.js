import React, { Component } from 'react';
import { View, StyleSheet, Button, StatusBar, Text } from 'react-native';


export default class StatusBarProject extends Component {

  constructor(props){
    super(props);
    this.state = {
      statusStyle: 'dark-content',
      bgColor: '#FFFFFF'
    };
    
    this.alternar = this.alternar.bind(this)
  }

  alternar(){
    
    if(this.state.statusStyle == 'dark-content'){
      this.setState({
        statusStyle: 'light-content',
        bgColor: '#000000'
      });
    }else{
      this.setState({
        statusStyle: 'dark-content',
        bgColor: '#FFFFFF'
      });
    }
   
  }

  render(){
    return (
      <View style={[styles.body, {backgroundColor:this.state.bgColor}]}>
        <StatusBar barStyle={this.state.statusStyle} />
        <Button title="Alterar" onPress={this.alternar} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }  
})