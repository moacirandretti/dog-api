import React, { useEffect, useState } from 'react';
import {api, api_img} from './services/api'
import { ImagemContainner, NomeCachorro, GlobalStyle, Containner,
  Raca, Nome, CorFonte, TipoFonte, Botao, Label, SelectBox, Line, InputBox } from './style';

function App() {

  const [raca, setRaca] = useState([])
  const [img, setImg] = useState([])
  console.log("Link da Img: " + img)

  const [racaSelecionada, setracaSelecionada] = useState('') 
  console.log("Raça selecionada: " + racaSelecionada)

  const [nomeCachorro, setnomeCachorro] = useState('')
  console.log("Nome cachorro: " + nomeCachorro)

  const [corFonte, setcorFonte] = useState('')
  const cores = ["#CCA64C", "#D68E67", "#BF6574", "#B567D6", "#6266CC"]
  console.log("Cor selecionada: " + corFonte)

  const[nomeFonte, setNomeFonte] = useState('')

  const chamarAPI = async (recurso, setEstado) => {
    await api.get(recurso).then(response => {
      const breedArray = [];

      for (let [key, value] of Object.entries(response.data.message)) {
        let breedObject = {
          breed: key,
          variations: value
        };

        breedArray.push(breedObject);
      }

      setEstado(breedArray)
    })
  }

  const chamarAPI_Img = async () => {
    await api_img.get(`${racaSelecionada + '/images/random'}`).then(response => {

      const imageLink = Object.entries(response.data)
      setImg(imageLink[0][1])
    })
  }

  useEffect(() => {
    chamarAPI('list/all', setRaca)
  }, [])

  useEffect(() => {
    chamarAPI_Img()
  }, [racaSelecionada])

localStorage.setItem('nomeChave', 'valor')

  const handleClick = () => {

    // raca, nome, cor, font
    localStorage.setItem('storageRaca', racaSelecionada)
    localStorage.setItem('storageNome', nomeCachorro)
    localStorage.setItem('storageCor', corFonte)
    localStorage.setItem('storageFont', nomeFonte)

    return alert ("Dados salvos!")
  }

  const loadStorage = (item, keyStorage) => {
    const valor = localStorage.getItem(keyStorage)
    if (valor !== ""){
      return valor
      
    } else {
      return item      
    }
  }

  return (
    <>
    <GlobalStyle />
    <Containner >
      <Raca>
        <Line>
      <Label>Selecione a raça:</Label>
      <SelectBox onChange={(e) => setracaSelecionada(e.target.value)} value={racaSelecionada}>
        {
          raca.map(item => {
            return (
              <option value={item.breed} >{item.breed}</option>
            )
          })
        }
      </SelectBox>
      </Line>
      </Raca>

      <Nome>
      <Label>Nome do cão:</Label>
      <InputBox type="text" placeholder="Insira o nome do seu dog" 
      onChange={(e) => setnomeCachorro(e.target.value)} 
      value={nomeCachorro} />
      </Nome>

      <CorFonte>
      <Label>Cor da fonte:</Label>
      <SelectBox onChange={(e) => setcorFonte(e.target.value)} value={corFonte}  >
        {
          cores.map(cor => {
            const valor = localStorage.getItem('storageCor')

            console.log("storageCor: " + valor + " , corMAP:" + cor)

            if (valor === cor ) {
              
              return <option key={cor} defaultValue value={valor} className="selected"  >{valor}</option>
            } else{

              return <option key={cor} value={cor}>{cor}</option>
              }
            })

        }
      </SelectBox>
      </CorFonte>

      <TipoFonte>
      <Label>Selecione a fonte:</Label>
      <SelectBox onChange={(e) => setNomeFonte(e.target.value)} value={nomeFonte} >

        <option value="Roboto" >Roboto</option>
        <option value="Oswald, sans-serif" >Oswald</option>
        <option value="Merriweather, serif" >Merriweather</option>
        <option value="'Montserrat', sans-serif" >Montserrat</option>
        <option value="'Pacifico', cursive" >Pacifico</option>
 
      </SelectBox>
      </TipoFonte>
      
      <Botao onClick={() => handleClick()}>Salvar</Botao>  

      <ImagemContainner imageURL={img} >

        <NomeCachorro text={nomeCachorro} cor={corFonte} fonte={nomeFonte} >
          {nomeCachorro}
        </NomeCachorro>
      </ ImagemContainner>

    </Containner>


    </>
  );
}
export default App;