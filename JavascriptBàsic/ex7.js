//Variables de los objetos
var objetos = ["taula","cadira","ordinador","llibreta"];
//Loop que recorre el array de objetos y la consola escribe su nombre i posición
objetos.forEach(function(elemento,index,array){
    index = index +1;
    console.log("El objeto " + elemento + " esta en la posición " + index + ".");
});