import {
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';


import React, { useState, useCallback, useEffect } from "react";
// import { Container, Form, SubmitButton, ListaRepo, DeleteButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import api from "../services/api";

export default function Home ({ navigation }) {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
      const reposStorage = localStorage.getItem('repos');

      if (reposStorage) {
        setRepositorios(JSON.parse(reposStorage));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);

    async function submit() {
        setLoading(true);
        try {
            if(newRepo === '') {
                throw new Error('Você precisa indicar um repositório');
            }

            const response = await api.get(`repos/${newRepo}`);
            const hasRepo = repositorios.find(r => r.name === newRepo);

            if(hasRepo) {
                throw new Error('Esse repositório já está salvo na sua lista');
            }

            const data = {
                name: response.data.full_name,
            };

            setRepositorios([...repositorios, data]);
            setNewRepo("");
        } catch (error) {
            console.log(error.message)
            setAlert(true);
        } finally {
            setLoading(false);
        }
    }
      

    const handleDeleteRepo = useCallback(
        (repo) => {
            const find = repositorios.filter((r: any) => r.name !== repo);
            setRepositorios(find);
        },
        [repositorios]
    );

    function handleInputChange(e) {
        setNewRepo(e.target.value);
        setAlert(null);
    }

    return (
      <View>
        <View style={styles.container}>
          <h1 style={styles.h1}>
              <FaGithub />
              Meus Repositórios
          </h1>

            <form style={{ display: 'flex', flexDirection: 'row' }}>
              <input
                style={{
                  // border: 01px solid ${(props) => (props.error ? "#ff0000" : "#ddd")};
                  // height: '40px',
                  borderRadius: '04px',
                  width: '70%',
                  padding: '10px',
                  color: '#222',
                }}
                type="text"
                placeholder="Adicionar repositório"
                value={newRepo}
                onChange={handleInputChange}
              />
                <TouchableOpacity onPress={submit}>
                  <View
                    style={{
                      ...styles.button,
                      backgroundColor: loading ? "#4caf50" : "#0d2636",
                    }}
                  >
                    {loading && <ActivityIndicator size="large" color="yellow" />}
                        {loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="#fff" size={14} />}
                  </View>
                </TouchableOpacity>

            </form>

                <View style={{
                  listStyle:'none',
                  margin:0,
                  padding:0,
                  marginTop:'16px',
                }}>
                    {repositorios.map((item: any) => (
                        <li key={item.name}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '18px 0',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                            <span
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                              }}
                            >
                              <TouchableOpacity onPress={() => handleDeleteRepo(item.name)}>
                                <View
                                  style={{
                                    ...styles.button,
                                      border: 'none',
                                      outline: 'none',
                                      backgroundColor: 'transparent',
                                  }}
                                >
                                  <FaTrash color="#cf0f50" size={14} />
                                </View>
                              </TouchableOpacity>
                                {/* <DeleteButton onClick={() => handleDeleteRepo(item.name)}>
                                    <FaTrash color="#cf0f50" size={14} />
                                </DeleteButton> */}
                                {item.name.substr(0, 25)}
                            </span>
                            {/* <Link to={`/repositorio/${encodeURIComponent(item.name)}`}>
                                <FaBars color="#0d2636" size={14} />
                            </Link> */}

                              <TouchableOpacity onPress={() => navigation.navigate('Repositorio', {item}) }>
                                <View
                                  style={{
                                    ...styles.button,
                                      border: 'none',
                                      outline: 'none',
                                      backgroundColor: 'transparent',
                                  }}
                                >
                                  <FaBars color="#0d2636" size={14} />
                                </View>
                              </TouchableOpacity>

                        </li>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: '700px',
        padding: '30px',
        borderRadius: '10px',
        margin: '80px auto',
    },
    h1: {
        color: '#0d2636',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
    },
    // add buton load
    button: {
      marginLeft: '6px',
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: 40,
      height: 40,
      borderWidth: 1,
      borderColor: "#666",
      borderRadius: 10,
    },
});

// const Home = ({ navigation }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home ;D</Text>
//     <Button 
//       title="Ir para Repositorio"
//       onPress={() => navigation.navigate('Repositorio') }
//     />
//   </View>
// );

Home.navigationOptions = {
  title: 'Home',
}

// export default Home;