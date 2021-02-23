//Variable del nom
var nom = ["A","R","N","A",4,"U"];
//Loop que mostra per consola si les lletres són vocals, consonants o números
console.log("Partim del nom " + nom.join(""));

nom.forEach(function(element,index,array){
    var valor = typeof element;
    switch(valor){
        case "number":
            console.log("Els noms no contenen el número: " + element);
            break;
        case "string":
            if(element.match(/[aeiouAEIOU]/g)){
                console.log("He trobat la Vocal: " + element);
            }else{
                console.log("He trobat la Consonant: " + element);
            }
            break;
    }
    
});