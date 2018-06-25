// console.log("Hello world");

// var puri = {
// 	nombre: "Priscila",
// 	apellido: "Bey",
// 	dni: "36785043"
// }

// console.log(puri.nombre)
// console.log(puri.apellido)
// console.log(puri.dni)
// console.log(puri["dni"])
// console.log(Object.keys(puri))
// console.log(Object.keys(puri)[2])
// console.log(puri[Object.keys(puri)[2]]) // hacer esto es lo mismo que hacer prui["dni"]

// // Parametros por default
// function miau (x=2,y=3) {
// 	console.log(x);
// 	console.log(y);
// }
// miau(5);

const inventario = [
 {tipo: "cable", cantidad: 5000, sucursal:"Centro"},
 {tipo: "cable", cantidad: 1000, sucursal:"Centro"},
 {tipo: "cable", cantidad: 650, sucursal:"Garin"},
 {tipo: "cable", cantidad: 100, sucursal:"Garin"},
 {tipo: "cable", cantidad: 150, sucursal:"Vicente Lopez"},
 {tipo: "cable", cantidad: 300, sucursal:"Vicente Lopez"},
 {tipo: "teclado", cantidad: 10, sucursal:"Centro"},
 {tipo: "teclado", cantidad: 1200, sucursal:"Garin"},
 {tipo: "modem", cantidad: 77, sucursal:"Centro"},
 {tipo: "monitor", cantidad: 20, sucursal:"Vicente Lopez"},
 {tipo: "monitor", cantidad: 10, sucursal:"Centro"},
]

// FILTER
// Devuelve un nuevo array 
var filter = inventario.filter( itemEnElQueEstoy => itemEnElQueEstoy.tipo === "cable" && itemEnElQueEstoy.sucursal === "Centro")
console.log(`resultado de Filter =`);
console.log(filter);

// FIND
// devuelve el primer item del array que cumpla con la condicion 
// Sino devuelve undefined 
var  find = inventario.find( itemEnElQueEstoy => itemEnElQueEstoy.cantidad < 100)
console.log(`resultado de Find =`);
console.log(find);

// MAP 
// Devuelve un array nuevo 
var map = inventario.map( itemEnElQueEstoy => itemEnElQueEstoy.sucursal)
console.log(`resultado de Map =`);
console.log(map)

// REDUCE 
// indexof = -1
var reduce = map.reduce((acumulador, itemEnElQueEstoy) => {
  if (!acumulador[itemEnElQueEstoy]) {
    acumulador[itemEnElQueEstoy] = 1;
  } else {
    acumulador[itemEnElQueEstoy] = acumulador[itemEnElQueEstoy] + 1;
  }
  return acumulador;
}, []);
console.log(`resultado de Reduce 1 =`);
console.log(reduce)

// REDUCE 2 
var reduce2 = map.reduce((acumulador, itemEnElQueEstoy) => {
  console.log(acumulador.indexOf(itemEnElQueEstoy))
  console.log(itemEnElQueEstoy)
  console.log(acumulador)
  if (acumulador.indexOf(itemEnElQueEstoy) === -1) {
    acumulador.push(itemEnElQueEstoy)
  }
  return acumulador;
}, []);
console.log(`resultado de Reduce 2 =`);
console.log(reduce2)

// El indexOf de un array vacio es siempre -1 
var arr = []
console.log(arr.indexOf(1))


