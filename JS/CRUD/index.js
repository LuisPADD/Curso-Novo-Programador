

const alunos = new Alunos(todosAlunos);

console.log(alunos.get());

setTimeout(() => {
    alunos.set({name:"Lucas",sobrenome:"Martins",idade:26,linguagens:["swift","ios","xcode"],experiencia:3,data:"2023-09-01"});
    alunos.update({name:"Lucas",sobrenome:"Martins",idade:26,linguagens:["swift","ios","xcode"],experiencia:3,data:"2023-09-01"},0);
    console.log(alunos.get());

    setTimeout(() => {
        alunos.delete(0);
        console.log(alunos.get());
    }, 3000);
}, 2000);


console.log(alunos.getByIndex(5));



