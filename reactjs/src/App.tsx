import React, {useState, useEffect} from "react";

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    //TODO: Enviar dados para BackEnd
    
    console.log(nome,email,mensagem)
  }

  return (  
    <>
      <form onSubmit={handleSubmit}>
        <p>Nome:</p>
        <input type="text" required onChange={(e)=>{setNome(e.target.value)}} value={nome}/>

        <br />

        <p>E-mail:</p>
        <input type="email" required onChange={(e)=>{setEmail(e.target.value)}} value={email}/>


        <p>Mensagem:</p>
        <textarea  placeholder="Digite aqui sua Mensagem!" required onChange={(e)=>{setMensagem(e.target.value)}}>{mensagem}</textarea>

        <br />

        <button type="submit">Enviar!</button>
      </form>
      
    </>
  );
}

export default App;
