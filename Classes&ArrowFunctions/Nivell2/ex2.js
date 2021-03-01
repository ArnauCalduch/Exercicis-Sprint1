//Clase Persona
class Persona{
    constructor(name){
        this.name = name;
    }

    decirNombre(){
        console.log(this.name);
    }
}
//Metodo de clase Persona que escribe el nombre pasado como parametro
var p = new Persona("Arnau");
p.decirNombre();