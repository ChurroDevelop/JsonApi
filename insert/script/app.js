import { post } from "./module.js";

let $root = document.querySelector("#root");
let $fragmento = document.createDocumentFragment();
let $section = document.createElement("section");
let $button = document.createElement("button");

let $form = document.createElement("form");
$form.setAttribute("method", "#");

let $input = document.createElement("input");
$input.setAttribute("type", "text");
$input.setAttribute("placeholder", "Ingrese id del post");
$input.setAttribute("onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)");

$section.classList.add("container");
$section.setAttribute("id", "container")

$button.setAttribute("id", "agregar");
$button.textContent = "Agregar post";
$button.classList.add("btn");
$button.setAttribute("type", "submit");

$form.appendChild($input);
$form.appendChild($button);

let $container = document.querySelector("#container");

$root.appendChild($form);
$root.appendChild($section);

let $accion = document.querySelector("#agregar");
let exp = /^\S/;
let number = /^\d/;

let agregaPost = (event) => {
  if (!exp.test($input.value)) {
    $input.classList.add("error");
    $input.classList.remove("confirm");
    alert("Esta vacio")
  }
  else {
    if (number.test($input.value) === true) {
      alert("agrego uno que funciona")
      $input.classList.add("confirm");
      $input.classList.remove("error")
      post($input.value)
      .then((list) => {
        // console.log(list);
        let $div = document.createElement("div");
        let $title = document.createElement("h1");
        let $pId = document.createElement("p");
        let $pBody = document.createElement("p");
        
        $div.setAttribute("id", "otra");
        $div.classList.add("card")
        let $otra = document.querySelector("#otra")
        
        $pId.textContent = list.id;
        $title.textContent = list.title;
        $pBody.textContent = list.body;
        
        $div.appendChild($pId);
        $div.appendChild($title);
        $div.appendChild($pBody);
        
        
        $section.insertBefore($div, $otra);
      })
    }
  }

  event.preventDefault();
}

$input.addEventListener("keyup", () => {
  if (number.test($input.value) === true) {
    $input.classList.add("confirm");
    $input.classList.remove("error");
  }
  else {
    if ($input.value === "") {
      $input.classList.remove("confirm");
      $input.classList.remove("error");
    }
    else {
      console.log("No se permiten letras");
      $input.classList.add("error");
      $input.classList.remove("confirm");
    }
  }
});
$form.addEventListener("submit", agregaPost);
// $accion.addEventListener("submit", agregaPost);

