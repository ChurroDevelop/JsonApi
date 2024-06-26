import { comentarios } from "./module.js"; // Importar modulo

let $root = document.querySelector("#root"); // Seleccionar el main
let $fragment = document.createDocumentFragment(); // Crear un fragmeto
let $plantilla = document.querySelector("#plantilla").content; // Seleccionar el template
let $section = document.createElement("section"); // Crear el section

$section.classList.add("cards"); // Agregarle la clase a la seccion de cards
$root.appendChild($section); // Agregarle la seccion al main

comentarios()
  .then((lista) => {
    lista.forEach((comment, index) => {

      // Seleccionar todos los elementos del template
      $plantilla.querySelector("div > h2").textContent = comment.name;
      $plantilla.querySelector("div > div > p ~ p ~ p").textContent = comment.body;
      $plantilla.querySelector("div > div > p ~ p").textContent = comment.email;
      $plantilla.querySelector("div > div > p > b").textContent = comment.id;

      // Agregar clase a la plantilla div
      $plantilla.querySelector("div").classList.add("card");

      // Importar el nodo a la variable clone
      let $clone = document.importNode($plantilla, true);
      
      // Agregar al fragmeno el clone
      $fragment.appendChild($clone);
    })
    // Agregarle a la section el fragmento
    $section.appendChild($fragment);
  })