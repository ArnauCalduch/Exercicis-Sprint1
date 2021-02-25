//Función que borra lo que este escrito 
function borrar(){ 
    document.getElementById("resultado").value = "";
}

//Función que printa el número o operador que se ha pulsado 
function mostrar(val){ 
    document.getElementById("resultado").value += val;
} 
  
//Función que lo que esta escrito y llama a la función eval que resuelve la operación
function sol(){ 
    let op = document.getElementById("resultado").value;
    let re = parseFloat(eval(op)).toFixed(5);
    if(!isNaN(re)){
        document.getElementById("resultado").value = re;
    }else{
        alert("Valor indefinido!");
        borrar();
    }
} 
  
 