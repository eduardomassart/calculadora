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
        if((display.value == 0 || definiuOperador) && addPonto == false){
            display.value = numero.value;
            definiuOperador = false;
        } else {
            display.value += numero.value;
            addPonto = false;
        }
    })
})

pontoSeparador.onclick = function(){
    acumulado = display.value + pontoSeparador.textContent;
    display.value = acumulado;
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
        
    })
})

igual.onclick = function () {
    if(operacao == "somar"){
        if(primeiraOperacao == false){
            display.value = parseFloat(acumulado) + parseFloat(segundoValor);
            acumulado = display.value;
        }
        if(primeiraOperacao){
            segundoValor = display.value;
            acumulado = parseFloat(primeiroValor) + parseFloat(segundoValor);
            display.value = acumulado;
        }

    }
        
    if(operacao == "multiplicar"){
        if(primeiraOperacao == false){
            display.value = acumulado * parseFloat(segundoValor);
            acumulado = display.value;
        }
        if(primeiraOperacao){
            segundoValor = display.value;
            acumulado = parseFloat(primeiroValor) * parseFloat(segundoValor);
            display.value = acumulado;
        }

    }

    if(operacao == "dividir"){
        if(primeiraOperacao == false){
            display.value = acumulado / parseFloat(segundoValor);
            acumulado = display.value;
        }
        if(primeiraOperacao){
            segundoValor = display.value;
            acumulado = parseFloat(primeiroValor) / parseFloat(segundoValor);
            display.value = parseFloat(acumulado);
        }

    }

    if(operacao == "subtrair"){
        if(primeiraOperacao == false){
            display.value = acumulado - parseFloat(segundoValor);
            acumulado = parseFloat(display.value);
        }
        if(primeiraOperacao){
            segundoValor = display.value;
            acumulado = parseFloat(primeiroValor) - parseFloat(segundoValor);
            display.value = acumulado;
        }
    }

    primeiraOperacao = false;
}

reset.onclick = function(){
    display.value = 0;
    operacao = 0;
    definiuOperador = false;
    acumulado = 0;
    primeiroValor = 0;
    segundoValor = 0;
    primeiraOperacao = true;
}
