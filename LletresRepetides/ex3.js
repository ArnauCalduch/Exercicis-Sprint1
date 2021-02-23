//Variable del nom i del mapa
var nom = ["A","R","N","A","U"];
let map = new Map();
//Loop que guarda les lletres al mapa i el nombre de vegades que apareixen
nom.forEach(function(index){
    map[index] = (map[index] || 0) + 1;
});
console.log(map);