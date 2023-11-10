/*
 Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

// let texto1 = "";

let palabra = prompt("Ingrese un texto")

function cadena(texto) {
    if(texto === texto.toLocaleUpperCase()){
        document.write("Está formado solo por mayúsculas")
    }else if(texto=== texto.toLocaleLowerCase()){
        document.write("Está formado solo por minúsculas")

    }else{
        document.write("Está formado por mayúsculas y minúsculas")

    }
}

cadena(palabra)