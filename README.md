# React js Class by Lele Lester 

> En este curso de 7 clases veremos todo lo básico que hay que saber de React js.

--- 
## Class Six 

### Router 
* npm i -s react-router 
* en App.js vamos a importar **BrowserRouter as Router, Route, Link, Switch from "react-router-dom"**
* **Exact** sera util para marcar las rutas exactas a nuestros componentes
```
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Users from './containers/Users';
import Groups from './containers/Groups';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="nav">
            <Link to="/users">Users</Link>
            <Link to="/groups">Groups</Link>
          </div>
          <div className="main">
            <Switch>
              <Route extact path="/users" component={Users}/>
              <Route extact path="/groups" component={Groups}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

```


---
## Class Five

### **Connect** => Conecta el componente con el state del reducer 
* Siempre recibe dos funciones, si una no se usa, deberá ser llamada null
```
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
```

## **mapStateToProps** => es una función que conecta las props del componente al state global. 
* Recibe como parametro el state y crea la prop a ser usada por el componente
* Esa prop suele adoptar el nombre del elemento del state a modificar
```
const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});
```
## **mapDispatchToProps** => hace el despacho de las actions con los parametros para ser usados por el state.
```
const mapDispatchToProps = dispatch => ({
  addProduct: params => dispatch(addProduct(params)),
  removeProduct: params => dispatch(removeProduct(params))
});
```

**EN RESUMEN ...**

```
import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "../state/actions";

class Item extends Component {
  render() {
    const { product, addProduct, removeProduct} = this.props 
    console.log(product)
    return (
      <div className="item">
        <span>{product.id}. {product.name}</span>
        <button onClick={() => addProduct({product})}>Add</button>
        <button onClick={() => removeProduct({product})}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});
const mapDispatchToProps = dispatch => ({
  addProduct: params => dispatch(addProduct(params)),
  removeProduct: params => dispatch(removeProduct(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
```

---
## Class Four 

### REDUX 
* Single immutable state tree
* Es un único state. NO hay multiples
* Esta dentro de un **store** 
* El store mantiene el state y lo muestra a toda la aplicacion 
* El estado es read only 
* Para cambiar el estado se utilizan las **acciones** y se definen como objeto y como constantes 
* Las actions tienen que tener un **type** obligatorio y una **descripcion** 
* La unica manera de modificar el state es **despachando** acciones (qué quiero hacer?)
* Los **reducers** son funciones que modfician el state (cómo lo hago?)
* Concepto de publisher suscriber 

### **Actions** => Cosas que quiero hacer 
* Mejor usar redux-actions (npm i -s redux-actions)
* Siempre tienen un type (siempre son strings) y pueden o no tener payload (parámetros)

```
import { createAction } from 'redux-actions'

// Actions
export const HOLA = "HOLA"
export const CHAU = "CHAU"

// Create Actions
export const decirHola = createAction(HOLA)
export const decirChau = createAction(CHAU)

```
### **Reducers** => Funciones puras que modifican el state 
```
import { handleActions } from "redux-actions"
import * as actions from './actions'

const INITIAL_STATE = {
    mensaje: null
}

const Saludar = handleActions(
    {
        [actions.HOLA]: (state,action) => {
            return {
                mensaje: "HOLA" + action.payload
            }
        }
    },
    {
        [actions.CHAU]: (state,action) => {
            return {
                mensaje: "CHAU" + action.payload
            }
        }
    },
    INITIAL_STATE
)

export default Saludar;

```

### **STORE** => Siempre esta en el index.js por que tiene que "hidratar" la app 
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import MoverProductos from "./state/reducer";

const middlewares = [];

if (window.devToolsExtension) {
  middlewares.push(window.devToolsExtension());
}

const store = createStore(MoverProductos, compose(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

```


---
## ClassThree

### **Reasignacion de Objetos**
```
Object.assign({llaves vacias}, objeto que quiero copiar, {propiedad que quiero cambiar o agregar})

Persona = {
    nombre: ..,
    apellido: ..,
    edad: ..
}
Object.assign({},Persona,{dni:""})
```
### **Reasignacion de Arrays**
Una manera (contact). El concat siempre arma un array nuevo
```
array.concat(array que quiero copiar)

const arr1 = ["perro": "pepe"]
const arr2 = []
const arr2.concat(arr1)

```
Otra manera (spread). El spread siempre arma un array nuevo 
```
const arr3 = [...arr1]
```
IMPOTANT! NO usar ni **push**, ni **pop**, ni **splice** por que no arman arrays nuevos

---
## ClassTwo

**Binding, ciclo de vida, state, props y reusabilidad de componentes**

### Binding

> "El contexto de las funciones se ve cuando se llaman y no cuando se definen"

Si yo llamo a una funcion en un input
```
<input type="text" onChange={this.handleInput}/>
```
* En este caso la funcion esta apuntando a input y no al componente clase. 
```
handleInput(e) {
    console.log(this) // undefined
    this.setState({ 
        name: e.target.value
    })
}
```
* En este caso el this va a dar undifined por que el this que pusimos en el input no apunta a la clase. Entonces tenemos que encontrar la manera de unirlos en el constructor.
* **setState**: es un metodo de react para cambiar state
* **e.target.value**: este es un metodo que se usa en cualquier funcion ligada a un evento para agarrar el valor. 
```
this.handleInput = this.handleInput.bind(this)
```
* De esta manera hago el bind de mi funcion con mi componente clase y ahora si puedo usar el this en la funcion. 


### Ciclo de vida


1. **constructor**: se inicializa la base de la aplicacion, state, etc
2. **componentWillMount**: no pasa nada
3. **render**: se renderiza la aplicacion
4. **componentDidMount**: Este es importante por que se hacen las llamadas a las API's o a las bases de datos. Probablemente haya un fetch ahi adentro.
```
componentDidMount() {
    console.log("paso por componentDidMount");
    let result;
    // ACA MODIFICO STATE
    fetch("https://randomuser.me/api/")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        result = myJson.results;
        console.log(result);
      });
    this.setState(
      {
        personas: result
      },
      () => {
        console.log("este es mi state");
        console.log(this.state);
      }
    );
  }
```
5. **componentWillReceiveProps(nextProps)**: se muestran las props que se estan recibiendo del padre
6. **shouldComponentUpdate(nextProps, nextState)**: se compara el state actual con el proximo state
7. **componentWillUpdate(nextProps, nextState)**
8. **render**
9. **componentDidUpdate(prevProps, prevState)**
10. **componentWillUnmount**: Ocurre cuando se desmonta el componente de la UI. Cuando el usuario cambia de página, el componente se desmonta y queda listo para el Garbage Collector


---

## ClassOne

**Componentes como Clases y componentes como Funciones**

### Clases 
- Los componentes como clases tiene un ciclo de vida 
- Manejan un estado 
- Si o si tienen un método render que heredan de un objeto Component
- Ese método retorna el contenido
- Se exportan por default para ser usados por otras areas de la aplicación
```
HelloWorld.js
export default class HelloWorld extends Component {
    render() {
        return  <p>Hello World</p>
    }
}
```
```
App.js
import HelloWorld from '../src/Component/HelloWorld/HelloWorld'
```
### Function 
- Tambien llamados stateless components 
- Los componentes hecho de funciones no tienen un ciclo de vida
- Se exportan sin default 
- NO hereda nada por lo tanto no necesita el render
- Cuando se los exporta o importa se pone entre {}
```
HelloWorldFunction.js
export const HelloWorldFunction = (str, str2) => { return <p>Hello World, {str} {str2}</p> }
```
```
App.js
import { HelloWorldFunction } from './Component'
```
--- 
**Props Function Component**
- Las props son usadas para pasar propiedades de padres a hijos o para cambiar informacion dentro de componentes dinamicamente 
- Cuando el componente es una funcion se declaran antes de la arrow function 
- Esa declaracion se vuelve un objeto al cual podemos agregar todas las keys que querramos para pasarlas a los hijos
```
HelloWorldFunction.js
export const HelloWorldFunction = props => {
    console.log(props)
    return <p>Hello World, {props.nombre} {props.apellido}</p> 
}
```
```
App.js
<HelloWorldFunction nombre="Puri" apellido="Bey" />
```
- Destruct: agarrar de un objeto lo que necesito 
```
HelloWorldFunction.js
export const HelloWorldFunction = ({nombre, apellido}) => {
    return <p>Hello World, {nombre} {apellido}</p> 
}
```
```
App.js
<HelloWorldFunction nombre="Puri" apellido="Bey" />
```

---
**State and Props Class Component**
- Tiene la data propia de cada componente clase. En un componente de function esto NO funcionaría
- El state siempre se define dentro del constructor que siempre es el primer método que se pone dentro del componente antes de render. 
- El state es un objeto y se define como tal. 
```
Button.js
export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 10 }
    }
    render() {
        return (
            <button>{ this.state.counter }</button>
        )
    }
}
```
- Cuando modifico el estado de ese componente se puede o no volver a renderizar ese componente
- Destruct: agarrar del objeto state lo que necesito que sería counter

```
Button.js
render() {
    const { counter } = this.state
    return (
        <button>{ counter }</button>
    )
}
```

--- 
## Clase de Intro
En esta clase se van a repasar algunas bases de ES6 y Javascript para poder arrancar con React sin problemas.

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
* *dato de color:*
```
// El indexOf de un array vacio es siempre -1 
var arr = []
console.log(arr.indexOf(1)) // -1
```

5. Retornar la sumatoria total de cable por sucursal. El output debería ser: [Centro: 6000, Garin: 750, Vicente Lopez: 450]

```
var last = inventario.reduce((acumulador, item) => {
  if(item.tipo === 'cable'){
    if(acumulador[item.sucursal]){
      acumulador[item.sucursal] += item.cantidad
    } else {
      acumulador[item.sucursal] = item.cantidad
    }
  }
  return acumulador;
},[])
console.log(`resultado de last =`);
console.log(last);
```
- Este ejercicio tomó su tiempo. En este caso el primer if filta por aquellos items que tengan tipo cable. 
- El segundo if pregunta si acumulador[item.sucursal] existe pero, como acumulador no tiene nada, da falso. Enconces se va al else y asigna a acumulador[item.sucursal] (que es lo mismo que decir Centro) el valor de cantidad del primer ITEM. 
- el segundo item pregunta lo mismo pero esta vez da true por que centro SI existe en acumulador entonces suma su valor de cantidad al valor de cantidad que ya existe en acumulador. 
- este proceso lo hace con todas las sucursales




