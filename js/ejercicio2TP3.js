/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let ciudades = [];
let ciudadesUnidas = [];

do {
  ciudades = prompt("ingrese el nombre de una ciudad");
  ciudadesUnidas.push(" " + ciudades);
} while (confirm("¿desea seguir agregando ciudades?"));

document.write(`${ciudadesUnidas} <br>`);

document.write(
  `El arreglo de ciudades tiene ${ciudadesUnidas.length} elementos <br>`
);
document.write(`<ul>
    <li>Elemento 1er posición: ${ciudadesUnidas[0]}</li>
    <li>Elemento 3er posición: ${ciudadesUnidas[2]}</li>
    <li>Elemento última posición: ${
      ciudadesUnidas[ciudadesUnidas.length - 1]
    }</li>
</ul>`);

ciudadesUnidas.push("Paris");
ciudadesUnidas.splice(1, 0, "Barcelona");
document.write(`<ul>
<li>Elemento última posición: ${ciudadesUnidas[ciudadesUnidas.length - 1]}</li>
<li>Elemento segunda posición: ${ciudadesUnidas[1]}</li>
</ul>`);

document.write(`<h2>Arreglo de Ciudades</h2>`);

document.write(`<ul>`);
for (let i = 0; i < ciudadesUnidas.length; i++) {
  document.write(`<li>Elemento: ${ciudadesUnidas[i]}</li>`);
}
document.write(`</ul>`);
