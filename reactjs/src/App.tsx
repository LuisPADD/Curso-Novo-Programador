import React, { useState, useEffect } from "react";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <>

      <h1 style={{color:'black', fontSize: '45px', backgroundColor: 'gray'}}>Titulo do BLOG</h1>
      <h2 style={{color: 'blue', fontSize: '150px'}}>Subtitulo do BLOG</h2>

      <br />  
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sunt tempore officia, accusantium nulla sed nam ipsam. Possimus expedita blanditiis, ea soluta sed ab ullam vitae, harum laborum quo dolorum.</p>


    </>
  );
}

export default App;
