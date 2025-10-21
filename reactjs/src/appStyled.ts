import styled from "styled-components";

type EspacoProps = {
    altura: string;
    largura: string;
    black?: boolean;
}

export const Espaco = styled.div<EspacoProps>`
    background-color: ${(props) => props.black ? 'black': 'white'};
    width: ${(props) => props.largura};
    height: ${(props) => props.altura};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 20px;
    color: ${(props) => props.black ? 'white' : 'black'};
  `;

export const Texto = styled.h1`
    font-size: 30px; 
`;

export const Quadrado = styled.div`
    width: 200px;
    background-color: blue;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Botao = styled.button`
    padding: 40px;
    background-color: white;
    color: black;
`;