/*
 Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const numero = parseInt(prompt("Ingrese un número"));

function tabla(valor) {
  document.write(`<table><tbody>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`<tr>

    <td>${valor} x ${i}</td>
    <td>${valor * i}</td>
    </tr>`);
  }
  document.write(`</tbody></table>`);
}

tabla(numero);
