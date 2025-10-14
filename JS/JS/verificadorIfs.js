const emailCerto = 'teste@gmail.com';
const senhaCerta = '123';

function verificar(){
    var email = document.getElementById('email').value;
    var senha = document.querySelector('#password').value;

    if (email == '' && senha == ''){
        alert('Por favor, preencha email e/ou senha')
    }else{
        var resultado = this.login(email, senha);
        
        if(resultado){
        alert('Login efetuado com Sucesso')
    }else{
        alert('Email e/ou senha inválidos')
    }
    }

    
}

function login (email, senha) {

    if (email == emailCerto && senha==senhaCerta){
        return true;
    }else{
        return false;
    }

}