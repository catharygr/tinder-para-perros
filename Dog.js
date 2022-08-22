

import { siguientePerro } from "./index.js"

export class Perros {
  constructor(perro) {
    //Copiamos objetos originales de data
    Object.assign(this, perro)
  }  

  // Generamos código de HTML y llamamos generador de eventos
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
  
  //Añadir eventos y si me gusta o no me gusta el perro
  generarEventos() {
    document.querySelector('#btn-nope').addEventListener('click', () => this.nope())
    document.querySelector('#btn-like').addEventListener('click', () => this.like())
  }
  nope() {
    document.querySelector('#nope').style.display = 'block'
    document.querySelector('#like').style.display = 'none'
    this.hasBeenSwiped = true
    this.hasBeenLiked = false
    console.log(this.hasBeenLiked)
    setTimeout(() => siguientePerro(),500)
  }
  like() {
    document.querySelector('#like').style.display = 'block'
    document.querySelector('#nope').style.display = 'none'
    this.hasBeenSwiped = true
    this.hasBeenLiked = true
  console.log(this.hasBeenLiked)
  setTimeout(() => siguientePerro(),500)
}
}  

