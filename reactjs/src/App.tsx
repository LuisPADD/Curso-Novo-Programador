import React, { useState, useEffect } from "react";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <>
      {logged && <p>Promoçoes do Dia</p>}
      
      {!logged && <p>Você não está logado. Faça login para ver as promoçoes do dia</p>}

      <button>Logar</button>

    </>
  );
}

export default App;
