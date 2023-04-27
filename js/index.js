var display = document.querySelector('#display-calculadora');
var operadores = document.querySelectorAll('.operadores');
var pontoSeparador = document.querySelector('.separador');
var igual = document.querySelector('.igual');
var reset = document.querySelector('#reset');
var numeros = document.querySelectorAll('.numeros');


var operacao;
var primeiroValor;
var segundoValor;
var acumulado;
var primeiraOperacaoAoDefinirOperador = true;

// for (var contador = 0; contador < numeros.length; contador++) {
//   var numero = numeros[contador];
  
//   numero.addEventListener('click', (function(numero) { 
//     return function() {
//       console.log(numero.value);
//     };
//   })(numero));
// }

numeros.forEach(function(numero){
    
    numero.addEventListener('click', function () {
        display.value += numero.value;
    })
})

operadores.forEach(function(operador){

    operador.addEventListener('click', function(){
        operacao = operador.value;
        if(primeiraOperacaoAoDefinirOperador){
            primeiroValor = parseFloat(display.value);
            if(display.value == ''){
                primeiroValor = 0;
            }   
        } else {
            primeiroValor = acumulado;
            primeiraOperacaoAoDefinirOperador = true;
        }
        display.value = "";
        
    })
})

igual.onclick = function () {
    if(operacao == "somar"){
        if(primeiraOperacaoAoDefinirOperador == false){
            display.value = acumulado + segundoValor;
            acumulado = parseFloat(display.value);
        }
        if(primeiraOperacaoAoDefinirOperador){
            segundoValor = parseFloat(display.value);
            acumulado = primeiroValor + segundoValor;
            display.value = acumulado;
        }

    }
        
    if(operacao == "multiplicar"){
        if(primeiraOperacaoAoDefinirOperador == false){
            display.value = acumulado * segundoValor;
            acumulado = parseFloat(display.value);
        }
        if(primeiraOperacaoAoDefinirOperador){
            segundoValor = parseFloat(display.value);
            acumulado = primeiroValor * segundoValor;
            display.value = acumulado;
        }

    }

    if(operacao == "dividir"){
        if(primeiraOperacaoAoDefinirOperador == false){
            display.value = acumulado / segundoValor;
            acumulado = display.value;
        }
        if(primeiraOperacaoAoDefinirOperador){
            segundoValor = parseFloat(display.value);
            acumulado = primeiroValor / segundoValor;
            display.value = parseFloat(acumulado);
        }

    }

    if(operacao == "subtrair"){
        if(primeiraOperacaoAoDefinirOperador == false){
            display.value = acumulado - segundoValor;
            acumulado = parseFloat(display.value);
        }
        if(primeiraOperacaoAoDefinirOperador){
            segundoValor = parseFloat(display.value);
            acumulado = primeiroValor - segundoValor;
            display.value = acumulado;
        }
    }

    primeiraOperacaoAoDefinirOperador = false;
}

reset.onclick = function(){
    display.value = "";
    operacao = 0;
    acumulado = 0;
    primeiroValor = 0;
    segundoValor = 0;
    primeiraOperacaoAoDefinirOperador = true;
}
