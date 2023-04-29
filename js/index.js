function exibeNoDisplay(parametro){
    return display.value = parametro;
}

function executaOperacao(param1, param2, operacao) {
    switch (operacao) {
        case 'somar':
            return param1 + param2;
        case 'subtrair':
            return param1 - param2;
        case 'multiplicar':
            return param1 * param2;
        case 'dividir':
            return param1 / param2;
        default:
            return NaN;
    }
}

var display = document.querySelector('#display-calculadora');
var operadores = document.querySelectorAll('.operadores');
var pontoSeparador = document.querySelector('.separador');
var igual = document.querySelector('.igual');
var reset = document.querySelector('#reset');
var numeros = document.querySelectorAll('.numeros');

var operacao;
var definiuOperador = false;
var primeiroValor;
var segundoValor;
var acumulado;
var primeiraOperacao = true;
var addPonto = false;

numeros.forEach(function(numero){
    numero.addEventListener('click', function () {
        if((display.value == 0 || definiuOperador) && addPonto == false){
            exibeNoDisplay(numero.value);
            definiuOperador = false;
        } else {
            exibeNoDisplay(display.value + numero.value);
        }
    })
})

pontoSeparador.onclick = function(){
    acumulado = display.value + pontoSeparador.textContent;
    exibeNoDisplay(acumulado);
    addPonto = true;
}

operadores.forEach(function(operador){
    operador.addEventListener('click', function(){
        operacao = operador.value;
        if(primeiraOperacao){
            primeiroValor = display.value;
        } else {
            primeiroValor = acumulado;
            primeiraOperacao = true;
        }
        definiuOperador = true;
        addPonto = false;
    })
})

igual.onclick = function () {
    if(primeiraOperacao == false){
        exibeNoDisplay(executaOperacao(parseFloat(acumulado), parseFloat(segundoValor), operacao));
        acumulado = parseFloat(display.value);
    }
    if(primeiraOperacao){
        segundoValor = parseFloat(display.value);
        acumulado = executaOperacao(parseFloat(primeiroValor), parseFloat(segundoValor), operacao);
        display.value = parseFloat(acumulado);
    }
    primeiraOperacao = false;
}    

reset.onclick = function(){
    display.value = 0;
    operacao = "";
    definiuOperador = false;
    acumulado = 0;
    primeiroValor = 0;
    segundoValor = 0;
    primeiraOperacao = true;
    addPonto = false;
}
