//Variable de nota de examen
var nota_examen = 6;
//Condicional para saber si ha aprobado
if(nota_examen < 5){
    alert("Has suspendido con un " + nota_examen);
}else{
    if(nota_examen == 5){
        alert("Pelado con un " + nota_examen);
    }else{
        alert("Has aprobado con un " + nota_examen);
    }
}