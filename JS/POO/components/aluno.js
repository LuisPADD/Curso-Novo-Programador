/*const Alunos = function (nome,idade,linguagens,exp){

    aNome = nome;
    aIdade =  idade;
    aLinguagens = linguagens;
    aExp = exp;

    this.getAluno = function(){
        return {
            nome: aNome,
            idade: aIdade,
            linguagens: aLinguagens,
            experiencia: aExp
        };
    }

    this.setAluno = function(){
        console.log('Enviar para o banco de dados todas as informações do aluno');
    }

    this.updateAluno = function(){
        console.log('Enviar ops dados para o banco de dados para atualizar o aluno!');
    }

    this.deleteAluno = function(id){
        console.log('Enviar para o banco de dados para apagar o aluno');
    }

} Funçoes*/

class Aluno {
    constructor(nome,idade,linguagens,exp){
        this.nome = nome;
        this.idade = idade;
        this.linguagens = linguagens;
        this.exp = exp;
    }

    getAluno(){
        return {
            nome: this.nome,
            idade: this.idade,
            linguagens: this.linguagens,
            experiencia: this.exp
        };
    }


}

class EndereçoAluno extends Aluno {
    constructor(rua, numero){
        super('Vitor', 21, ['php','js','react'],6)
        this.rua = rua;
        this.numero = numero;
    }

    getTodosOsDados(){
        return {
            ...super.getAluno(), rua: this.rua, numero: this.numero,
        }
    }
}