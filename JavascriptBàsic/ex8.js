/**
 * Función calculadora que recibe el operador y dos valores,
 * depende de que operador reciba hara la operación equivalente
 */
function calculadora(operador,valor1,valor2){

    switch(operador){
        case 'suma':
            var suma = valor1+valor2;
            console.log("La suma de " + valor1 + " y " + valor2 + " es " + suma);
            break;
        case 'resta':
            var resta = valor1-valor2;
            console.log("La resta de " + valor1 + " y " + valor2 + " es " + resta);
            break;
        case 'multi':
            var multi = valor1*valor2;
            console.log("La multiplicación de " + valor1 + " por " + valor2 + " es " + multi);
            break;
    }
}
//Variable que llama a la función calculadora i le da sus valores
var resultado = calculadora('suma',23,77);