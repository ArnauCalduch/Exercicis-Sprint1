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
//Arrow function que retorna una promise que cerca el salari d'un empleat pel seu id
getEmpleat = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            employees.forEach(e => {
                if(id == e.id){
                    salaries.forEach(s => {
                        if(e.id == s.id){
                            resolve("El salari de " + e.name + " es de " + s.salary);
                        }
                    });
                }
            });
            reject("No s'ha trobat cap empleat amb id: " + id);
        },1500);
    });
}
//Funció asíncrona que rep la id d'un empleat i crida a getEmpleat perque li tetorni una resposta
async function printEmpleat(id){
    try{
        const msg = await getEmpleat(id);
        console.log(msg);
    }catch(err){
        console.log(err);
    }
    
}

printEmpleat(2);