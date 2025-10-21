import { Espaco, Texto, Quadrado, Botao} from './appStyled';
import React, {useState} from 'react';

function App() {

  const [theme, setTheme] = useState(false);


  return (

    <>
      <Espaco altura='150px' largura='150px' black={theme}>
        <Texto>Olá</Texto>     
      </Espaco>

      <Quadrado>
        <Botao onClick={()=>{setTheme(!theme)}}>Trocar Tema</Botao>
      </Quadrado>

    </>
  );

}

export default App;
