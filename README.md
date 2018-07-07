# React js Class by Lele Lester 

> En este curso de 7 clases veremos todo lo básico que hay que saber de React js.

---
## Branches 
* [intro]()
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

