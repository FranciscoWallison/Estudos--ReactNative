import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import { FaArrowLeft} from "react-icons/fa";
import { useRoute } from '@react-navigation/native';
import api from "../services/api";

const Repositorio = () => 
{
  const route = useRoute();
  const { item } = route.params;
  const repoName = item.name;
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [stateIssue, setStateIssue] = useState([
      {state: 'all', label: 'Todas', active: true},
      {state: 'open', label: 'Abertos', active: false},
      {state: 'closed', label: 'Fechados', active: false},
  ]);
  const [stateIndex, setStateIndex] = useState(0);

  async function load() {
    console.log("repoName: ", `/repos/${repoName}`)

    const repositorioData = await api.get(`/repos/${repoName}`);
    const issuesData = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: stateIssue[stateIndex].state,
          page,
          per_page: 5,
        },
      })
console.log("repoName: ", repositorioData , issuesData)
    setRepositorio(repositorioData.data);
    setIssues(issuesData.data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    setLoading(true);
    load();
  }, [page]);

  useEffect(() => {
    setLoading(true);
    setPage(1);
    load();
  }, [stateIndex]);

  function handleChangePage(p) {
    setPage(p === "next" ? page + 1 : page - 1);
  }

  function handleChangeFiltro(state) {
    setStateIndex(state);
  }

  if (loading) {
    return (
      <div style={{
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: '700px',
        padding: '30px',
        borderRadius: '10px',
        margin: '80px auto'

      }}>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
      >
          <h1 style={{
            marginBottom: '8px'
          }}>Carregando...</h1>
        </div >
      </div >
    );
  }

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Repositorio</Text>
    // </View>

    <div>
      <div style={{
        backgroundColor: '#fff',
        // width: '100%',
        // maxWidth: '700px',
        padding: '30px',
        borderRadius: '10px',
        margin: '80px auto',
      }}>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img 
            style={{
              margin: 0,
              maxWidth: '150px',
              backgroundColor: '#eee',
              borderRadius: '300px',
              padding: '20px',
              marginBottom: '15px'
            }}

          src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
          <h1 style={{
            marginBbottom: '8px'
          }}>{repositorio.name}</h1>
          <p style={{
            maxWidth: '400px',
            lineHeight: '150%',
            color: '484848'
          }}>{repositorio.description}</p>
        </div>
          <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderTop: '01px solid #eee',
            borderBottom: '01px solid #eee',
            padding: '10px',
            marginTop: '15px',
          }}
          active={stateIndex}>
              <p>Listar:</p>
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: '10px'
                }}
              >
                  {stateIssue.map((filter, index) => (
                      <button 
                        style={{
                          backgroundColor: 'transparent',
                          border: '01px solid #eee',
                          marginRight: '5px',
                          padding: '7px 10px',
                          borderRadius: '5px',
                          cursor: 'pointer'
                        }}
                      
                      type="button" key={filter.label} onClick={() => handleChangeFiltro(index)} >{filter.label}</button>
                  ))}
              </div>
          </div>
          <div>
              {issues.map((issue) => (
                  <li key={issue.id}>
                      <img src={issue.user.avatar_url} alt={issue.title} />

                      <div>
                          <a href={issue.html_url} target="_blank">{issue.state + ": " + issue.title}</a>

                          <div 
                            style={{
                              display: 'inline-block',
                              flexDirection: 'row'
                            }}
                          >
                              {issue.labels.map((item) => (
                                  <span 
                                    style={{
                                      backgroundColor: '#484848',
                                      color: '#fff',
                                      padding: '5px 8px',
                                      borderRadius: '4px',
                                      fontSize: '11px',
                                      display: 'inline-block',
                                      marginBottom: '8px',
                                      marginRight: '5px'
                                    }}
                                  key={item.id}>{item.name}</span>
                              ))}
                          </div>

                          <p className="autor">Autor: {issue.user.login}</p>
                      </div>
                  </li>
              ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '30px',
            }}
          >
              <div
                style={{
                  color: '#fff',
                  backgroundColor: '#0d2636',
                  border: 'none',
                  outline: 'none',
                  padding: '7px 10px',
                  borderRadius: '5px',
                }}
              
               onClick={() => handleChangePage("back")} disabled={page < 2}>
                Voltar
              </div>
              <div
                style={{
                  color: '#fff',
                  backgroundColor: '#0d2636',
                  border: 'none',
                  outline: 'none',
                  padding: '7px 10px',
                  borderRadius: '5px',
                }}
                onClick={() => handleChangePage("next")}>Próxima</div>
          </div>
      </div>
    </div>
  );
}


Repositorio.navigationOptions = {
  title: "Repositorio"
};

export default Repositorio;