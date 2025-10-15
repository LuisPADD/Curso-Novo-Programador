const aulas = [
    {
        id: 1,
        nome: 'JSON',
        descricao: 'Aula ensinado como funcionam as requisições na WEB usando JASON',
        data: '10 Jun'
    },
];


const   aulasJSON = JSON.stringify(aulas);

const aulasObjeto = JSON.parse(aulasJSON);

console.log(aulas);
console.log(aulasJSON);
console.log(aulasObjeto);
