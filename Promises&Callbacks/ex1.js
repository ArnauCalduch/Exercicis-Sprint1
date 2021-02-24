//Funció que retorna una promise que invoca la funció resolve
function printMessage (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const error = true;

            if(!error){
                resolve("Missatge de resolve :)");
            }else{
                reject("Missatge de reject :(");
            }
        },1500);
    });
}

printMessage()
.then((msg) => console.log(msg))
.catch(err => console.log(err));