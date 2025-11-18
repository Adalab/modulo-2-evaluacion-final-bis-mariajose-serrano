"use strict";

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const usersList = document.querySelector(".js_usersList");

// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

const oneuser = {
  name: "Yolande Dupuis",
  city: "Mettembert",
  username: "greencat145",
};

usersList.innerHTML = `

<li class="userCard">
        <img src="./images/Druv Chiplunkar.jpg" alt="Userphoto" />
        <h3>${oneuser.name}</h3>
        <ul class="usersfeatures">
          <li>${oneuser.city}</li>
          <li>${oneuser.username}</li>
        </ul>
      </li>`;

usersListUL.innerHTML = console.log("Página y JS cargados!");

// SECCIÓN DE DATOS
// Variables globales que almacenan la información principal de la aplicación
// y se usan por todo el fichero.

// SECCIÓN DE FUNCIONES
// Éstas son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.

// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos

// SECCIÓN DE EVENTOS
// Éstos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)
