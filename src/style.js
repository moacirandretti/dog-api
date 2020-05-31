import styled from 'styled-components'
import { createGlobalStyle  } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bebas+Neue&family=Lora:wght@700&family=Merriweather:wght@700&family=Oswald:wght@500&family=Pacifico&family=Roboto:wght@500&display=swap');
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
    
`;

export const NomeCachorro = styled.p`
    color: ${props => props.cor};
    font-family: ${props => props.fonte};
    margin: 0 auto;
    font-size: 25px;
    text-transform: uppercase;
`;