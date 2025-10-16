function buscarVelocidadeAtual(){

    return new Promise((resolve,reject)=>{
        
        //Acessar o equipamento de velocidade atual

        setTimeout(() => {
            result(110);
        }, 6000);

        setTimeout(() => {
            console.log('acessando equipamento de calculo!');
        }, 2000);

        setTimeout(() => {
            console.log('Calculando e processando informações obtidas!')
        }, 4000);

    });
}
const result =  buscarVelocidadeAtual();
result.then((velocidade)=>{
    console.log("A velocidade atual é de: "+velocidade+' KM/h')
}).catch(()=>{
    console.log("Ocorreu um erro ao ler a velocidade atual do veiculo!")
});