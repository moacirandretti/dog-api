import React, {useEffect, useState} from 'react';
import api from './services/api'

function App() {

    const[raca, setRaca] = useState([])

    const chamarAPI = async (recurso) => {
      await api.get(recurso).then(response => {
        setRaca([response.data.message])        
      })
    }

  useEffect(()=>{chamarAPI('list/all')}, [])

  console.log("Tipo do retorno: " + typeof(raca))
  console.log("Conteudo: " + raca)

  return (
    <>
    <h1>Selecione a raça:</h1>
    <p>
      {
        raca.map(item => {
          return (item)
        })
      }
    </p>
    </>
  );
}
export default App;
