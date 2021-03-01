//Variable de la matriz
var matriz = [];
//Bucle que guarda las funciones, que cuentan de 0 a 9, a la matriz
for(var i = 0; i < 10; i++){
    var func = function(){
            return "0,1,2,3,4,5,6,7,8,9";
        }
    matriz.push(func);
}
//Bucle de la matriz que llama a las funciones
matriz.forEach(function(elem,index){
    console.log(elem());
});