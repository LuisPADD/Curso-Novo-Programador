import React from 'react';
import "./fonts.css";
import { Header,  ItemHeader, TextHeader  } from './AppStyled';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';


function App() {


  return (
    <div>
      <Header>
        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize:'18px', opacity: '.8', cursor: 'pointer', marginTop:'-5px'}} icon={faApple} />
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>iPad</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>iPhone</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>Só na Apple</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>
        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize:'12px', opacity: '.8', cursor: 'pointer'}} icon={faMagnifyingGlass} />
        </ItemHeader>
        <ItemHeader>
          <FontAwesomeIcon style={{color: '#f5f5f7', fontSize:'14px', opacity: '.8', cursor: 'pointer'}} icon={faBagShopping} />
        </ItemHeader>
      </Header>
    </div>
  );
}

export default App;
