/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let dado1 = 0;
let dado2 = 0;
let suma = [];
let conteo2 = [];
let conteo3 = [];
let conteo4 = [];
let conteo5 = [];
let conteo6 = [];
let conteo7 = [];
let conteo8 = [];
let conteo9 = [];
let conteo10 = [];
let conteo11 = [];
let conteo12 = [];

function tiradaDados() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

for (i = 1; i <= 50; i++) {
  dado1 = tiradaDados();
  dado2 = tiradaDados();
  suma = dado1 + dado2;
  document.write(`${suma} - `);

  if (suma === 2) {
    conteo2.push(2);
  }else if (suma === 3) {
    conteo3.push(3);
  }
  else if (suma === 4) {
    conteo4.push(4);
  }else if (suma === 5) {
    conteo5.push(5);
  }else if (suma === 6) {
    conteo6.push(6);
  }else if (suma === 7) {
    conteo7.push(7);
  }else if (suma === 8) {
    conteo8.push(8);
  }else if (suma === 9) {
    conteo9.push(9);
  }else if (suma === 10) {
    conteo10.push(10);
  }else if (suma === 11) {
    conteo11.push(11);
  }else{
    conteo12.push(12);
  }
}

document.write(`<table>
<thead>
  <th>Suma</th>
  <th>Apariciónes</th>
</thead>
<tbody>
  <tr>
    <td>2</td>
    <td>${conteo2.length}</td>
  </tr>
  <tr>
    <td>3</td>
    <td>${conteo3.length}</td>
  </tr>
  <tr>
    <td>4</td>
    <td> ${conteo4.length}</td>
  </tr>
  <tr>
    <td>5</td>
    <td> ${conteo5.length}</td>
  </tr>
  <tr>
    <td>6</td>
    <td> ${conteo6.length}</td>
  </tr>
  <tr>
    <td>7</td>
    <td>${conteo7.length}</td>
  </tr>
  <tr>
    <td>8</td>
    <td>${conteo8.length}</td>
  </tr>
  <tr>
    <td>9</td>
    <td>${conteo9.length}</td>
  </tr>
  <tr>
    <td>10</td>
    <td>${conteo10.length}</td>
  </tr>
  <tr>
    <td>11</td>
    <td> ${conteo11.length}</td>
  </tr>
  <tr>
    <td>12</td>
    <td>${conteo12.length}</td>
  </tr>
</tbody>
</table>`)

