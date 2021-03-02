//Classe Person
class Person{
    constructor(definicion){
        this.definicion = definicion;
    }
}
//Función que crea objetos con la definición como parametro
function crearObjeto(definicion){
    const p = new Person();
    p.definicion = definicion;
    console.log(p);
}

crearObjeto("persona 1");
crearObjeto("persona 2");