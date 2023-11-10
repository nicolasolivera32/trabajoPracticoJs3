/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/

const ladoA = parseFloat(prompt("Ingrese el valor del lado A"));
const ladoB = parseFloat(prompt("Ingrese el valor del lado B"));
p = 0;

function perimetro(lado1, lado2) {
  p = 2 * (lado1 + lado2);
  document.write(`<p>El perímetro del rectángulo es:</p> ${p}`);
}

perimetro(ladoA, ladoB);
