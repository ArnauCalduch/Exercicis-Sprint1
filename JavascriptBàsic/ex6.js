//Variable de la string de la frase
var frase = "Tinc un cotxe de color blau";
/*Consola escribe el contenido de la variable frase
reemplazando la palabra blau con verde*/
console.log(frase.replace("blau","verd"));
/*Consola escribe el contenido de la variable frase
reemplazando la la letra o con la u,(/o/g indica que el reemplazco es global)*/
console.log(frase.replace(/o/g,"u"));