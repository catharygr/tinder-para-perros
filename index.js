import { dogs } from "./data.js"

  const contenido = document.querySelector('#contenido')
  class Perros {
    constructor(perro) {
      Object.assign(this, perro)
    }  
    generarHTML() {
      contenido.innerHTML = `
      <img class="image" src="${this.avatar}" alt="Perro enamorando">
      <img id="like" class="sello" src="./images/badge-like.png" alt="Me gusta">
      <img id="nope" class="sello" src="./images/badge-nope.png" alt="No me gusta">
      <div class="metadata">
      <h2><span>${this.name}</span>, <span>${this.age}</span></h2>
      <p>${this.bio}</p>
      </div>
      <div class="footer">
      <button class="btn" id="btn-nope"><img src="./images/icon-cross.png" alt="Cross"></button>
      <button class="btn" id="btn-like"><img src="./images/icon-heart.png" alt="Heart"></button>
      </div>
      `
      this.generarEventos()
    }
    
    
    generarEventos() {
      document.querySelector('#btn-nope').addEventListener('click', this.nope)
      document.querySelector('#btn-like').addEventListener('click', this.like)
    }
    nope() {
      document.querySelector('#nope').style.display = 'block'
      document.querySelector('#like').style.display = 'none'
      this.hasBeenSwiped = true
      this.hasBeenLiked = false
      console.log(this.hasBeenLiked)
      // const time = setTimeout(siguientePerro, 2000)
    }
    like() {
      document.querySelector('#like').style.display = 'block'
      document.querySelector('#nope').style.display = 'none'
      this.hasBeenSwiped = true
      this.hasBeenLiked = true
    console.log(this.hasBeenLiked)
    // setTimeout(siguientePerro, 2000)
  }
}  


const perrosArray = dogs.map(dog => new Perros(dog))

function siguientePerro() {
  const indice = perrosArray.findIndex( perro => perro.hasBeenSwiped === false)
  perrosArray[indice].generarHTML()

}
siguientePerro()






































