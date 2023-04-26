var display = document.querySelector('#display-calculadora');
var operadores = document.querySelectorAll('.operadores');
var pontoSeparador = document.querySelector('.separador');
var igual = document.querySelector('.igual');

var numeros = document.querySelectorAll('.numeros');

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

