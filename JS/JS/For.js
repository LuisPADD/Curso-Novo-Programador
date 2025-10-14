let allProducts = [
    {nome: 'Macarrão', preco: '25,00'},
    {nome: 'Feijão', preco:'5,00'},
    {nome: 'Arroz', preco: '6,00'}
];


let diasDoMes = 30;

let evento = "fazer Academia";

for (let q = 1; q <= 30; q++){
    adicionarEvento(q,evento)
}

function adicionarEvento(q,evento){
    console.log('Cadastro do evento '+evento+' do dia ' +q)
}