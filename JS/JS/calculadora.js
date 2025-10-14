function calcular(){
    var numero1 = parseInt(document.getElementsByName('numero1')[0].value)
    var numero2 =  parseInt(document.querySelector('.numero2').value)



    var operador = document.getElementById('operador').value;

    if(operador == '+'){
        var resultado = numero1 + numero2;

    }
    if(operador == '-'){
        var resultado = numero1 - numero2;

    }
    if(operador == '/'){
        var resultado = numero1 / numero2;

    }
    if(operador == '*'){
        var resultado = numero1 * numero2;
    }

    document.querySelector('#resultado').innerHTML = resultado;
}