//Objectes employees y salaries
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
//Arrow function que retorna una Promise que busca un objeto por su id
getEmpleado = id => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!isNaN(id)){
                employees.forEach(e => {
                    if(e.id == id){
                        resolve("Empleado: id:" + e.id + ", name: " + e.name);
                    }
                });
                reject("No se ha encontrado ningun empleado con id:" + id);
            }else{
                reject("La id tiene que ser un número!");
            }
        },1500);
    });
}

getEmpleado(1)
.then((emp) => console.log(emp))
.catch(err => console.log(err));