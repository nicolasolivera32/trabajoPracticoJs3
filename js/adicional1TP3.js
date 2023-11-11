/*
Encontrar el número mayor en un arreglo: Escribe una función que tome un arreglo de números como argumento y devuelva el número más grande en el arreglo.
*/

const valores = [];

function mayorNumero(valor) {
  for (let i = 0; i < 5; i++) {
    valores.push(parseInt(prompt("Ingrese 5 números")));
  }
  alert(`El número mayor es: ${Math.max(...valor)}`);
}

mayorNumero(valores);
