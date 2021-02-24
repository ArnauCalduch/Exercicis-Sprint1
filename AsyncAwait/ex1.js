//Variables dels empleats i salaris
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
//Arrow function que retorna una promise que cerca un empleado pel seu id
getEmpleat = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            employees.forEach(e => {
                if(id == e.id){
                    //resolve("L'Empleat " + e.name + " s'ha trobat!");
                    resolve(e);
                }
            });
            reject("No s'ha trobat cap empleat amb id: " + id);
        },1500);
    });
}
//Arrow function que rep un employee i retorna el seu salari
getSalari = (employee) => {
    salaries.forEach(s => {
        if(employee.id == s.id){
            console.log("El salari de " + employee.name + " es de " + s.salary);
        }
    });
}

getEmpleat(1)
.then((e) => getSalari(e))
.catch(e => console.log(e));
