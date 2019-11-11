import React, { Component } from 'react'
import { 
  View, 
  StyleSheet,
  ImageBackground, 
  Text,
  Button } 
from 'react-native'


export default class PrimeiroProjeto extends Component {

  constructor(props){
    super(props);
    this.state = {consumido:0, status:'Ruim', pct: 0};

    this.addCopo = this.addCopo.bind(this);
    this.ataualizar = this.ataualizar.bind(this);
  }

  addCopo(){
    let s = this.state;
    s.consumido += 200;
    this.setState(s);

    this.ataualizar();
  }

  ataualizar(){
    let s = this.state;
    s.pct = ((s.consumido/2000)*100);
    
    if(s.pct >= 100){
      s.status = "Bom"
    }else{
      s.status = "Ruim"
    }

    if(s.pct > 100){
      s.pct = 0;
      s.consumido = 0
    }
    this.setState(s);
  }

  render(){
    return(
      <View style={styles.body}>
          <ImageBackground source={require('./images/watherbg.jpg')}
            style={styles.bgimage}>
              <View>
                <View style={styles.infoArea}>
                  <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Meta</Text>
                    <Text style={styles.areaDado}>2000ml</Text>                
                  </View>

                  <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Consumido</Text>
                    <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
                  </View>

                  <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Status</Text>
                    <Text style={styles.areaDado}>{this.state.status}</Text>
                  </View>
                </View>

                <View style={styles.pctArea}>
                  <Text style={styles.pctText}>{this.state.pct}%</Text>
                </View>

                <View style={styles.btnArea}>
                  <Button title="Beber 200ml" type="outline" onPress={this.addCopo} />
                </View>

              </View>

          </ImageBackground>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:0
  },
  bgimage:{
    flex:1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    marginTop:75
  },
  area:{
    flex:1,
    alignItems:'center'
  },
  areaTitulo:{
    color: '#45b2fc'
  },
  areaDado:{
    color: '#2b4274',
    fontSize:15,
    fontWeight:'bold'
  },
  pctArea:{
    marginTop:270,
    alignItems:'center'
  },
  pctText:{
    fontSize:80,
    color:'#FFFFFF',
    backgroundColor:'transparent'
  },
  btnArea:{
    marginTop:30,
    alignItems: 'center'
  }
})