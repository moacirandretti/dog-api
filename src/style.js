import styled from 'styled-components'
import { createGlobalStyle  } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bebas+Neue&family=Lora:wght@700&family=Merriweather:wght@700&family=Oswald:wght@500&family=Pacifico&family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
html, body {
    border: 0;
    margin: 0;
    box-sizing: content-box;
    padding: 0;
}
`
export const ImagemContainner = styled.div`
    background-image: url(${props => props.imageURL});
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    padding: 20px;
    grid-area: imagem;
    border-radius: 10px;
    
`;

export const NomeCachorro = styled.p`
    color: ${props => props.cor};
    font-family: ${props => props.fonte};
    margin: 0 auto;
    font-size: 45px;
    text-transform: uppercase;
`;

export const Containner = styled.div`
    margin: 0 auto;
    width: 60vw;
    color: #000;
    font-size:25px;
    font-family: Roboto, serif;
    display: grid; 
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(auto-fill, minmax(600px, 2fr));
    grid-template-areas: 
    "campos"
    "raca"
    "nome"
    "corFonte"
    "tipoFonte"
    "botao"
    "imagem";
`;


export const Raca = styled.div`
    grid-area: raca;
    display: flex;
    justify-content: space-between;
`;

export const Nome = styled.div`
    grid-area: nome;
`;

export const CorFonte = styled.div`
    grid-area: corFonte;
`;

export const TipoFonte = styled.div`
    grid-area: tipoFonte;
`;

export const Botao = styled.button`
    background: #F2B705;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 50px;
    width: 200px;
    height: 50px;
    border-radius: 8px;
    border: 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    grid-area: botao;
    justify-self: center;

    &:hover {
    background: #F2B705;
    filter: brightness(90%);
    transition: 0.5s;    
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 50px;
    width: 200px;
    height: 50px;
    border-radius: 8px;
    border: 0;
    text-decoration: none;
    text-align: center;
    grid-area: botao
    }
`;

export const Label = styled.label`
    padding-right: 25px;
    text-align: left;
`;

export const SelectBox = styled.select`
    font-size: 22px;
    font-family: Roboto, serif;
    color: #FF8F42;
    justify-self: right;
`;

export const InputBox = styled.input`
    font-size: 22px;
    font-family: Roboto, serif;
    color: #A15FFF;
`;

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
`;