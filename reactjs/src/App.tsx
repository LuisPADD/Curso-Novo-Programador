import React, {useState, useEffect} from "react";

function App() {

  const [login, setLogin] = useState('Não Logado!');
  return (  
    <>
      <button onClick={()=>{setLogin('Logado')}}>LOGIN</button>

      <button onClick={()=>{setLogin('Não Logado!')}}>DESLOGAR</button>

      <br/>
      <br/>

      {login}
    </>
  );
}

export default App;
