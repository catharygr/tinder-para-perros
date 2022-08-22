import { dogs } from "./data.js"
import { Perros} from "./Dog.js"

  
const contenido = document.querySelector('#contenido')


// Generando un array con los objeto (perros) dentro a base de la Clase Perros
const perrosArray = dogs.map(dog => new Perros(dog))

// Esta funcion es para generar el siguiente perro y hace que el juego circule con los mismo perros con la condicional
export function siguientePerro() {
  const indice = perrosArray.findIndex( perro => perro.hasBeenSwiped === false)
  if (indice >= 0) {
    perrosArray[indice].generarHTML() 
  } else {
    perrosArray.forEach(perro => perro.hasBeenSwiped = false)
    perrosArray[0].generarHTML()
  }
}
siguientePerro()






































