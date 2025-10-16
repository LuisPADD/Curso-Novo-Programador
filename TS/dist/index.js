var Login = /** @class */ (function () {
    function Login(emailCerto, senhaCerta) {
        this.EmailCerto = emailCerto;
        this.SenhaCerta = senhaCerta;
    }
    Login.prototype.administrador = function (email, senha) {
        if (email == this.EmailCerto && senha == this.SenhaCerta) {
            return true;
        }
        else {
            return false;
        }
    };
    Login.prototype.funcionario = function () {
        return false;
    };
    return Login;
}());
var login = new Login('certo@gmail.com', '123');
var loginAdm = login.administrador('certo@gmail.com', '1233');
console.log(loginAdm);
//# sourceMappingURL=index.js.map