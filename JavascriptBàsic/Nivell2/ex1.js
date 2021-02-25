/**
 * Función calculadora que recibe el operador y dos valores,
 * depende de que operador reciba hara la operación equivalente
 */
function calculadora(operador,valor1,valor2){

    if(!isNaN(valor1) && !isNaN(valor2)){
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
            case 'div':
                if(valor2 != 0){
                    var div = parseFloat(valor1/valor2).toFixed(2);
                    console.log("La división de " + valor1 + " entre " + valor2 + " es " + div);
                }else{
                    console.log("No se puede dividir entre zero!");
                }
                break;
            default :
                console.log("Tienes que escribir suma, resta, multi o div!");
                break;
        }
    }else{
        console.log(`Los valores no son correctos!
        Tienes que escribir números`);
    }
}
//Llamamos a la función calculadora y le decimos que tipo de operación quiere hacer y sus valores
calculadora('suma',43,66);