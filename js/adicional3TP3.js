/*
Convertir grados Celsius a Fahrenheit: Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit.
*/

const celsius = parseFloat(prompt("Ingrese un valor"));
let fahrenheit = 0;

function grados(numero) {
  fahrenheit = (numero * 9) / 5 + 32;
  alert(
    `${numero} grados Celsius equivalen a: ${fahrenheit} grados Fahrenheit`
  );
}

grados(celsius);
