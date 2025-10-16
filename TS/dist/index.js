var Calculadora = /** @class */ (function () {
    function Calculadora(primeiroNumero, segundoNumero) {
        this.PrimeiroNumero = primeiroNumero;
        this.SegundoNumero = segundoNumero;
    }
    Calculadora.prototype.somar = function () {
        return this.PrimeiroNumero + this.SegundoNumero;
    };
    Calculadora.prototype.subtrair = function () {
        return this.PrimeiroNumero - this.SegundoNumero;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.PrimeiroNumero * this.SegundoNumero;
    };
    Calculadora.prototype.dividir = function () {
        return this.PrimeiroNumero / this.SegundoNumero;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(15, 54);
var resultadoSoma = calculadora.somar();
var resultadoSubtracao = calculadora.subtrair();
var resultadoMultiplicacao = calculadora.multiplicar();
var resultadoDivisao = calculadora.dividir();
console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);
//# sourceMappingURL=index.js.map