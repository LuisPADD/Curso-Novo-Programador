const todosAlunos = [
{name:"Vitor",sobrenome:"Manoel",idade:21,linguagens:["php","js","golang","python"],experiencia:6,data:"2022-02-19"},
{name:"Ana",sobrenome:"Silva",idade:25,linguagens:["java","c#","js"],experiencia:3,data:"2023-05-10"},
{name:"Carlos",sobrenome:"Oliveira",idade:30,linguagens:["python","r","sql"],experiencia:8,data:"2021-11-25"},
{name:"Beatriz",sobrenome:"Santos",idade:22,linguagens:["js","typescript","react"],experiencia:1,data:"2024-01-01"},
{name:"Daniel",sobrenome:"Ferreira",idade:28,linguagens:["php","laravel","vue"],experiencia:5,data:"2022-08-15"},
{name:"Fernanda",sobrenome:"Rocha",idade:27,linguagens:["ruby","rails","js"],experiencia:4,data:"2023-02-28"},
{name:"Guilherme",sobrenome:"Costa",idade:19,linguagens:["html","css","tailwind"],experiencia:0,data:"2024-05-20"},
{name:"Helena",sobrenome:"Pires",idade:35,linguagens:["java","kotlin","android"],experiencia:10,data:"2021-06-05"},
{name:"Igor",sobrenome:"Almeida",idade:23,linguagens:["c++","c","assembly"],experiencia:2,data:"2023-10-12"},
{name:"Juliana",sobrenome:"Gomes",idade:29,linguagens:["python","django","aws"],experiencia:7,data:"2022-04-01"}
];

class Alunos {

    constructor(allAlunos){
        this.allAlunos = allAlunos;
    }

    get(){
        return this.allAlunos;
    }

    getByIndex(index){
        return todosAlunos[index];
    }

    set(novoAluno){
        todosAlunos.push(novoAluno);
    }

    update(dadosAluno, index){
        todosAlunos[index] = dadosAluno;
    }

    delete(index){
        delete todosAlunos[index];
    }


}