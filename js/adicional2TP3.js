/*
Filtrar números pares en un arreglo: Escribe una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo que contenga solo los números pares del arreglo original.
*/

const numeros = [];

function conjuntoNumeros(valores) {
  for (let i = 0; i < 5; i++) {
    valores.push(parseInt(prompt("Ingrese 5 números")));
  }
  const filtrados = valores.filter((valor) => valor % 2 === 0);
  document.write(`los números ${filtrados} son pares`);
}

conjuntoNumeros(numeros);
