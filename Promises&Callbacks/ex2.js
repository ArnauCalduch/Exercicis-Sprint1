//Funció callback que printa el missatge escollit
function chosedMessage(msg){
    console.log(msg);
}
//Funció que rep un boolean i crida un callback per enviar un missatge
const printMessage = (choose,callback) => {
    if(choose){
        callback("Missatge Alfa!");
    }else{
        callback("Missatge Beta!");
    }
}

printMessage(true,chosedMessage);