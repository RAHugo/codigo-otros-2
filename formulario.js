var formulario = document.querySelector(".formulario")
/* Lo que esta dentro de la función se cambio por un event */
formulario.onsubmit = function(event) {
/* Se cambio por un event.preventDefault */
  event.preventDefault();
  /* Se cambio el nombre de las variables */
  var nombre = formulario.elements[0];
  var edad = formulario.elements[1];
  var nacionalidad = formulario.elements[2];
/* Se puso el nombre correcto de donde se sacara el valor */
  var nombre = nombre.value;
  var edad = edad.value;
/* Nombre correcto de aglunas variables */
  var i = nacionalidad.selectedIndex;
  var nacionalidad = nacionalidad.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);
/* Poner el lugar correcto donde se va ir poniendo */
  if (nombre.length === 0) {
    formulario.elements[0].classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    formulario.elements[1].classList.add("error");
  }

if (nombre.length > 0 && (edad >= 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

/* Eliminar lineas de código, ya que este parte del código es necesario para la función de agregar invitados */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  /* Cambiar el getElementid por un querySelctor por comodidad */
var lista = document.querySelector(".lista-de-invitados");
var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

/* Eliminar lineas de código ya que esas se repetian en la función de crear elemento */

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}

/* Agregar ; en las lineas de código donde sea necesario */