import React, {useState} from "react";

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState<number>(0);
  const [operacao, setOperacao] = useState('');
  const [segundoNumero, setsegundoNumero] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  function handlesubmit(e: React.FormEvent){
    e.preventDefault();

    switch (operacao) {
      case '+':
          setResultado(primeiroNumero+segundoNumero);
        break;
      case '-':
          setResultado(primeiroNumero-segundoNumero);
        break;
      case '*':
          setResultado(primeiroNumero*segundoNumero);
        break;
      case '/':
          setResultado(primeiroNumero/segundoNumero);
        break;
      case '':
          setResultado(0);
        break;
      default:

        break;
    }
  }


  return (  
    <>

    <form method="submit" onSubmit={handlesubmit}>
      <input type="number" onChange={(e)=>{setPrimeiroNumero(e.target.valueAsNumber)}} value={primeiroNumero}/>

      <select onChange={(e)=>{setOperacao(e.target.value)}} value={operacao}>
        <option value="">-- Selecione a operação --</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>

      <input type="number" onChange={(e)=>{setsegundoNumero(e.target.valueAsNumber)}} value={segundoNumero}/>
      
      <button type="submit">Calcular</button>
      <br />
      <b>RESULTADO: {resultado}</b>
    </form>  
    </>
  );
}

export default App;
