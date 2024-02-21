/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = [
    "El perro",
    "El gato",
    "La cacatua",
    "El perico",
    "El loro",
    "El hamster"
  ];
  let verbo = ["comio", "rompio", "Destrozo", "trago", "mordio"];
  let que = ["La tarea", "el tabajo", "El proyecto", "La maqueta", "El folio"];
  let cuando = ["Ayer", "Anoche", "Hace 5 min", "En la mañana", "No lo se"];

  function generadoExcusas(quien, verbo, que, cuando) {
    let Actquien = quien[Math.floor(Math.random() * quien.length)];

    let Actverbo = verbo[Math.floor(Math.random() * verbo.length)];

    let Actque = que[Math.floor(Math.random() * que.length)];

    let Actcuando = cuando[Math.floor(Math.random() * cuando.length)];

    return Actquien + " " + Actverbo + " " + Actque + " " + Actcuando;
  }
  console.log(generadoExcusas(quien, verbo, que, cuando));
  function onLoad() {
    console.log("prueba");
    let excusaJose = document.getElementById("excuse");
    excuse.innerHTML = generadoExcusas(quien, verbo, que, cuando);
  }
  window.onload = onLoad();

  console.log("Hello Rigo from the console!");
};
