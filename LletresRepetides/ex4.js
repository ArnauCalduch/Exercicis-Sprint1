//Variable del nom ,cognom i nom complet
var nom = ["A","R","N","A","U"];
var cognom = ["C","A","L","D","U","C","H"];
var nomComplet = [];
//Fusionem els array en un, afegim un espai entremig i ho mostra a la consola
nomComplet = nom.concat(" ").concat(cognom);
console.log(nomComplet);