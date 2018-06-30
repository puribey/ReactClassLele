// console.log("Hello world");

var puri = {
	nombre: "Priscila",
	apellido: "Bey",
	dni: "36785043"
}

console.log(puri.nombre) //Priscila 
console.log(puri.apellido) //Bey
console.log(puri.dni) //36785043
console.log(puri["dni"]) //36785043
console.log(Object.keys(puri)) //['nombre','apellido','dni']
console.log(Object.keys(puri)[2]) //dni
console.log(puri[Object.keys(puri)[2]]) // hacer esto es lo mismo que hacer prui["dni"]

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

// // FILTER
// // Devuelve un nuevo array 
// var filter = inventario.filter( itemEnElQueEstoy => itemEnElQueEstoy.tipo === "cable" && itemEnElQueEstoy.sucursal === "Centro")
// console.log(`resultado de Filter =`);
// console.log(filter);

// // FIND
// // devuelve el primer item del array que cumpla con la condicion 
// // Sino devuelve undefined 
// var  find = inventario.find( itemEnElQueEstoy => itemEnElQueEstoy.cantidad < 100)
// console.log(`resultado de Find =`);
// console.log(find);

// // MAP 
// // Devuelve un array nuevo 
// var map = inventario.map( itemEnElQueEstoy => itemEnElQueEstoy.sucursal)
// console.log(`resultado de Map =`);
// console.log(map)

// // REDUCE 
// // indexof = -1
// var reduce = map.reduce((acumulador, itemEnElQueEstoy) => {
//   if (!acumulador[itemEnElQueEstoy]) {
//     acumulador[itemEnElQueEstoy] = 1;
//   } else {
//     acumulador[itemEnElQueEstoy] = acumulador[itemEnElQueEstoy] + 1;
//   }
//   return acumulador;
// }, []);
// console.log(`resultado de Reduce 1 =`);
// console.log(reduce)

// // REDUCE 2 
// var reduce2 = map.reduce((acumulador, itemEnElQueEstoy) => {
//   console.log(acumulador.indexOf(itemEnElQueEstoy))
//   console.log(itemEnElQueEstoy)
//   console.log(acumulador)
//   if (acumulador.indexOf(itemEnElQueEstoy) === -1) {
//      acumulador.push(itemEnElQueEstoy)
//   }
//   return acumulador;
// }, []);
// console.log(`resultado de Reduce 2 =`);
// console.log(reduce2)

// // El indexOf de un array vacio es siempre -1 
// var arr = []
// console.log(arr.indexOf(1))


// var last = inventario.filter( itemEnElQueEstoy => itemEnElQueEstoy.tipo === "cable").reduce((acumulador, item) => {
//   const sucursal = item.sucursal
//   // console.log(acumulador)
//   // acumulador.push(item)
//   // console.log(acumulador)
//   // console.log(item)
//   if (!acumulador[sucursal]) {
//     //acumulador[item] = item.cantidad;
//     //acumulador.push(sucursal)
//   } else {
//     //acumulador[item] = acumulador[item] + item.cantidad;
//   }
//   return acumulador;
// },[])
// console.log(`resultado de last =`);
// console.log(last);


// En este caso estamos preguntando, acumulador[item.sucursal] existe? 
// La primera respuesta va a ser no entonces como es false se asigna
// el valor de cantidad del primer item a acumulador[item.sucursal]
// pero despues eso va a dar true entonces se van a sumar el resto de las cantidades
console.log(inventario)

var last = inventario.reduce((acumulador, item) => {
  // console.log('acumulador = '+ acumulador)
  // console.log('item =')
  // console.log(item)
  if(item.tipo === 'cable'){
    if(acumulador[item.sucursal]){
      console.log(item.sucursal)
      console.log(acumulador[item.sucursal])
      console.log(item.cantidad)
      acumulador[item.sucursal] += item.cantidad
      console.log(acumulador)
    } else {
      console.log(item.sucursal)
      console.log(acumulador[item.sucursal])
      acumulador[item.sucursal] = item.cantidad
      console.log(acumulador)
    }
  }
  return acumulador;
},[])
console.log(`resultado de last =`);
console.log(last);


// Esto nunca va a funcionar porque estamos haciendo que indexOf compare
// lo que tiene acumulador cada vuelta con lo que tiene el objeto dentro de inventario 
// al ser datos diferentes el indexOf siempre va a ser true o = a -1 
// entonces los valores se van a pisar 
// Palabras de lele: el acumulador tiene otro formato entonces no es lo mismo a lo que busca el indexOf
// arriba encambio no estamos prguntando por ningun valor entonces solo va a checkear si existe o no

// console.log(inventario)
// var last = inventario.reduce((acumulador, item) => {
//   // console.log('acumulador = '+ acumulador)
//   // console.log('item =')
//   // console.log(item)
//   if(item.tipo === 'cable'){
//     if(acumulador.indexOf(item.sucursal) === -1 ){
//       acumulador[item.sucursal] = item.cantidad
//     } else {
//       acumulador[item.sucursal] += item.cantidad
//     }
//   }
//   return acumulador;
// },[])
// console.log(`resultado de last =`);
// console.log(last);

