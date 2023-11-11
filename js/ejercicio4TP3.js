/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

let valor = 0

function numero(ingreseNumero){
    if(ingreseNumero % 2 === 0){
        document.write(`${ingreseNumero} <h2>es un número par</h2>`)
    }else{
        document.write(`${ingreseNumero} <h2>es un número impar</h2>`)
    }
}

valor = parseFloat(prompt("ingrese un número"))
if(valor >0 && Number.isInteger(valor)){
    numero(valor);
}else{
    document.write(`<h2>Es un número inválido</h2>`)
}

