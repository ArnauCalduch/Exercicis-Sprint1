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
                        resolve(e);
                    }
                });
                reject("No se ha encontrado ningun empleado con id:" + id);
            }else{
                reject("La id tiene que ser un número!");
            }
        },1500);
    });
}
//Arrow function que recibe un empleado, busca su salario y lo printa
getSalario = emp => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            salaries.forEach(s => {
                if(emp.id == s.id){
                    resolve("Salario: id:" + s.id + ", salary: " + s.salary);
                }
            });
            reject("No se ha encontrado salario!");
        },1500);
    })
}

getEmpleado(4)
.then((emp) => getSalario(emp)
    .then((sal) => console.log(sal))
    .catch(err => console.log(err)))
.catch(err => console.log(err));