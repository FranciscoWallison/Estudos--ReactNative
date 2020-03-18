import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  AsyncStorage,
  TextInput
 } from 'react-native';

export default class ProjectAsyncStorage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }

    AsyncStorage.getItem("name").then(
      (value) => {
        this.setState({
          name: value
        })
      }
    );

  }

  setName(text){
    this.setState({
      name: text
    })
    AsyncStorage.setItem("name", text)
  }

  render(){
    return (
      <View style={styles.body}>
        <TextInput style={styles.input} value={this.state.name} onChangeText={(text)=>this.setName(text)}  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    height:40,
    width:200,
    borderWidth:1,
    borderColor: '#CCCCCC',
    padding:10,
    fontSize:16
  }
})