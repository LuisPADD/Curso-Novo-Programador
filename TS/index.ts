class Calculadora {

        PrimeiroNumero: number;
        SegundoNumero: number;


        constructor(primeiroNumero: number, segundoNumero: number){
            this.PrimeiroNumero = primeiroNumero;
            this.SegundoNumero = segundoNumero;
        }

        somar(){
            return this.PrimeiroNumero + this.SegundoNumero;
        }
        subtrair(){
            return this.PrimeiroNumero - this.SegundoNumero;
        }
        multiplicar(){
            return this.PrimeiroNumero * this.SegundoNumero;
        }
        dividir(){
            return this.PrimeiroNumero / this.SegundoNumero;
        }
}

const calculadora = new Calculadora(15, 54);
const resultadoSoma = calculadora.somar();
const resultadoSubtracao = calculadora.subtrair();
const resultadoMultiplicacao = calculadora.multiplicar();
const resultadoDivisao = calculadora.dividir();

console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao)