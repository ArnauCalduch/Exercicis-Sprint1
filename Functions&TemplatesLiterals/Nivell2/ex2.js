//Variables de nombre y apellidos
const name = `Arnau`;
const surname = `Calduch Rivas`;
//Función que retorna el nombre y apellidos
function printFullName(name,surname){
    return name + ` ` + surname;
}
//Imprime por consola lo que retorna la función llamada por template literals
console.log(`${printFullName(name,surname)}`);