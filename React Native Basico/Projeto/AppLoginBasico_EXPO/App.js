import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const logando = () => {
    // Código para autenticação do usuário aqui
    console.log(`Login: ${login} Senha: ${senha}`);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <Text style={{ marginTop: 20 }} >Senha:</Text>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />

      <Button title="Login" onPress={logando} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
});
