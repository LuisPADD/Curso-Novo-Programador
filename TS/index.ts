class Login {

    EmailCerto: string;
    SenhaCerta: string;


    constructor(emailCerto: string, senhaCerta: string){
        this.EmailCerto = emailCerto;
        this.SenhaCerta = senhaCerta;
    }

    administrador(email:string, senha:string): boolean{
        if(email == this.EmailCerto && senha == this.SenhaCerta){
            return true;
        }else{
            return false;   
        }


    }

    funcionario(): boolean{
        return false;
    }

}

const login = new Login('certo@gmail.com','123');

const loginAdm = login.administrador('certo@gmail.com', '1233')

console.log(loginAdm)