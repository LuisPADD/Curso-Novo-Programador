import React, { useState, useEffect } from "react";

function App() {
  const usuarios = [
    {name: 'Vitor', lastname: 'Manoel'},
    {name: 'Ana', lastname: 'Nogueira'},
  ];

  return (
    <>

      {usuarios.map((nomes) => {
        return (
          <>
            {nomes.name} {nomes.lastname}
             <br />
          </>
        )
      }
      )
      }

    </>
  );
}

export default App;
