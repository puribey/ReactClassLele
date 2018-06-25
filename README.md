# React js Class by Lele Lester 

> 

Primeros comandos: 
- npm init -y
- npm i nodemon / npm install -g nodemon => es un demonio o servicio que corre sin poderlo cortar 
- touch ejemplos.js
- nodemon ejemplos.js 

## Pequeño repaso de javascript

### **Arrays**

1. Cómo definís un array de objetos en javascript? 

```
var array = [
    {
        Characteristic1: “hello” ,
        Characteristic2: true,
        Characteristic3: 123
    },
    {
        Characteristic1: “hello” ,
        Characteristic2: true,
        Characteristic3: 123
    },
];
```

2. Cómo recuperás un elemento dentro de un array en javascript?
```
Array[0] 
```

3. Qué evento ocurre al clickear un elemento HTML?
```
onClick
```

4. Cuál es la diferencia entre let y const?
* **Let** es como var, se puede reasignar. Pero hay que tener cuidado con variables locales y globales. 
* **Const** no se modificar si es un valor primitivo. Pero si se pueden modificar los objetos y array por que no son tipos primitivos. 

5. Cuál es la diferencia entre los operadores =, == y ===?
* El **=** es asignación 
* El **==** es igualdad
* El **===** es idéntico en valor y tipo 

6. Dar un ejemplo de un if ternario
```
var isGatito = true;
isGatito ? “Awww” : “Ohhhh”
```
---

### **Clases & Objetos**

1. Cómo definís una clase en javascript?
```
class Gatito {}
```
2. Qué significa que una clase herede de otra?
* Significa que hereda todas sus propiedades y metodos sin tener que repetirlos
```
class Gatito extends Felino {}
```
3. Cómo definís una clase que herede de otra?
* El objeto siamés hereda las propiedades de pelo y ojos de la clase gatito

4. Cómo definís un objeto en javascript?
```	
const Siames = {
    personalidad: “extrovertido”,
    inteligente: true,
};
```
5. Definir un objeto Persona, con nombre “Celeste”, apellido “Medina” y rol “Master of the universe”
```
var persona = {
    nombre: “Celeste”,
    apellido: “Medina”,
    rol: “Master of the universe”,
};
persona.edad = 30; // esto agrega esa propiedad al objeto
```
6. Cómo recuperas el valor de la propiedad rol?
```
persona.rol 
```
7. Cómo recuperas todas las propiedades?
```
Object.keys(persona) // array de propiedades
Object.keys(persona)[0] // nombre
persona[“nombre”] // Celeste  
persona(Object.keys(persona)[0]) // Celeste 
```

8. Cómo recuperas todos los valores de las propiedades?
```
Object.values(persona) // array de valores
```
---
### **Funciones**
1. Cómo definís una función en javascript?
```
function miau() {}
// or
var miau = function () {}
```
2. Cómo llamas a una función en javascript?
```
miau();
```

3. Cómo defino una función que recibe parámetros?
```
function miau(x, y) {
   		 return x + y;
}
```
* Los **parametros default** son la asignacion de valores en los parametros.
```
function miau(x="aww", y) {}
```

4. Cómo invocás una función que recibe parámetros?
```
miau(“lindo”, “gatito”);
```
5. Definir una arrow function llamada saludar, que reciba por parámetro nombre y apellido y mostrarlos.
```
const saludo = (parametro1, parametro2) => {}
```

---

### **Ejercicios**
Ejercicios con métodos de programación funcional: Todos los ejercicios a continuación se resuelven con alguno de los métodos de programación funcional: MAP, FILTER, REDUCE, FIND

Utilizando el siguiente array
```
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
```

1. Retornar sólo los registros que tengan “tipo” igual a “cable” y la sucursal sea “Centro”
```
// FILTER
// Devuelve un nuevo array 
var filter = inventario.filter( itemEnElQueEstoy => itemEnElQueEstoy.tipo === "cable" && itemEnElQueEstoy.sucursal === "Centro")
console.log(filter);
```
2. Retornar el primer registro del array que tenga cantidad menor a 100
```
// FIND
// devuelve el primer item del array que cumpla con la condicion
// Sino devuelve undefined
var  find = inventario.find( itemEnElQueEstoy => itemEnElQueEstoy.cantidad < 100)
console.log(`resultado de Find =`);
console.log(find);
```

3. Retornar un listado de las sucursales que existen en el array sin importar que se repitan
```
// MAP
// Devuelve un array nuevo
var map = inventario.map( itemEnElQueEstoy => itemEnElQueEstoy.sucursal)
console.log(`resultado de Map =`);
console.log(map)
```
4. Retornar un listado de las sucursales sin que se repitan.
```
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
 if (acumulador.indexOf(itemEnElQueEstoy) === -1) {
   acumulador.push(itemEnElQueEstoy)
 }
 return acumulador;
}, []);
console.log(`resultado de Reduce 2 =`);
console.log(reduce2)
```

5. Retornar la sumatoria total de cable por sucursal. El output debería ser: [Centro: 6000, Garin: 750, Vicente Lopez: 450]


## Branches 
* []()




