import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, Button } from 'react-native';

export default class ModalProjeto extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }

  openModal(){
    this.setState({modalVisible: true});
  }

  closeModal(){
    this.setState({modalVisible: false});
  }

  render(){
    return (
      <View style={styles.body}>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={styles.modalButton}>            
            <Button title="X" onPress={this.closeModal}/>            
          </View>          
          <View style={styles.modalText}>
            <Text>Testando 1,2,3..</Text>
          </View>
        </Modal>
        <Button title="Abrir Modal" onPress={this.openModal}/>
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
  modalButton:{
    flex: 1,
    backgroundColor: '#00FF00',
    paddingTop: 25,
    alignItems: 'flex-start'
  },
  modalText:{
    flex: 1,
    backgroundColor: '#00FF00',
    paddingTop: 40,
    alignItems: 'center'
  }
})