"use strict";

//con esto siempre que recargue la pagina me da 10 nuevos usuarios
localStorage.removeItem("usersBackup");

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const usersList = document.querySelector(".js_usersList");

const btnSave = document.querySelector(".btn-save");
const btnLoad = document.querySelector(".btn-load");

console.log(btnSave);
console.log(btnLoad);

// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

//const oneuser = {
//name: "Yolande Dupuis",
//city: "Mettembert",
//username: "greencat145",
//};
//DEJO ESTO COMENTADO.

//NECESITAMOS UN BUCLE QUE RECORRA CADA UNO DE LOS OBJETOS DEL ARRAY

function renderOneUser(oneUser) {
  const friendClass = oneUser.isFriend ? "friend" : "";

  const html = `
<li class="userCard ${friendClass}" data-id="${oneUser.login.uuid}">
        <img src="${oneUser.picture.medium}" alt="Userphoto" />
        <h3>${oneUser.name.first} ${oneUser.name.last}</h3>
        <ul class="usersfeatures">
          <li>${oneUser.location.city}</li>
          <li>${oneUser.login.username}</li>
        </ul>
      </li>`;

  return html;
}

//solo hay 1
let usersArray = [];

//Bucle for para pintar 1 usuario

let html = "";

for (const oneUser of usersArray) {
  html += renderOneUser(oneUser);
}

usersList.innerHTML = html;

// PINTAMOS EL HTML RESULTADO EN EL <ul>

// SECCIÓN DE DATOS;
// Variables globales que almacenan la información principal de la aplicación
// y se usan por todo el fichero.

// SECCIÓN DE FUNCIONES
// Éstas son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.

//Función para pintar todos los usuarios
//si un array tiene algun elemento se usa propiedad lenght

function renderAllUsers(usersArray) {
  if (usersArray.lenght === 0) {
    usersList.innerHTML = "<li>No hay naves!</li>";
  } else {
    //El array Users si tiene objetos
  }

  let html = "";

  for (const oneUser of usersArray) {
    html += renderOneUser(oneUser);
  }

  usersList.innerHTML = html;
}

//. Llamada a la función
renderAllUsers(usersArray);

// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos

// SECCIÓN DE EVENTOS
// Éstos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)

//para MARCAR EN ROSA COMO AMIGO !!!!!

usersList.addEventListener("click", marcarAmigo);

function marcarAmigo(event) {
  const li = event.target.closest(".userCard");
  if (!li) return;

  const clickedId = li.dataset.id;

  const clickedUser = usersArray.find((user) => user.login.uuid === clickedId);

  if (clickedUser) {
    clickedUser.isFriend = true; // marcado
    console.log("Marcado como amigo:", clickedUser);

    renderAllUsers(usersArray); // ← REPINTAR EL LISTADO
  }
}

// Sacamos la info del Local Storage
//si NO si no esta esta variable creada en el LS hacemos Fetch y guardamos datos en el LS.

// Leer LS al cargar
const dataInLS = JSON.parse(localStorage.getItem("usersBackup") || "[]");

if (dataInLS.length === 0) {
  // NO HAY DATOS → LOS CARGO DE LA API
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => {
      usersArray = data.results; // guardo en array global
      renderAllUsers(usersArray); // pinto
      localStorage.setItem(
        // guardo en LS
        "usersBackup",
        JSON.stringify(usersArray)
      );
    });
} else {
  // SÍ HAY DATOS → LOS CARGO DE LS
  usersArray = dataInLS;
  renderAllUsers(usersArray);
}

//BOTON PARA GUARDAR USUARIOS !!!

const saveBtn = document.querySelector(".btn-save");

btnSave.addEventListener("click", saveUsersToLocalStorage);

function saveUsersToLocalStorage() {
  localStorage.setItem("usersBackup", JSON.stringify(usersArray));
  console.log("Usuarios guardados:", usersArray);
}

function loadUsersFromLocalStorage() {
  // Leer del localStorage (si no existe, devuelve [])
  const dataInLS = JSON.parse(localStorage.getItem("usersBackup") || "[]");

  if (dataInLS.length === 0) {
    console.log("No hay datos guardados en localStorage");
    return;
  }

  // Sobrescribir el array global
  usersArray = dataInLS;

  // Volver a pintar
  renderAllUsers(usersArray);

  console.log("Usuarios recuperados:", usersArray);
}
