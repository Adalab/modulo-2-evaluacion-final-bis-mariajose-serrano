"use strict";

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const usersList = document.querySelector(".js_usersList");

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

//NECESITAMOS UN BUCLE QUE RECORRA CADA UNO DE LOS OBJETOS DEL ARRAY STARSHIPS

usersList.innerHTML = `

<li class="userCard">
        <img src="./images/Druv Chiplunkar.jpg" alt="Userphoto" />
        <h3>${oneuser.name}</h3>
        <ul class="usersfeatures">
          <li>${oneuser.city}</li>
          <li>${oneuser.username}</li>
        </ul>
      </li>`;

const usersArray = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Latife",
      last: "Eliçin",
    },
    location: {
      street: {
        number: 9914,
        name: "Şehitler Cd",
      },
      city: "Edirne",
      state: "Trabzon",
      country: "Turkey",
      postcode: 67702,
      coordinates: {
        latitude: "72.7116",
        longitude: "161.6050",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "latife.elicin@example.com",
    login: {
      uuid: "9575f54c-aa2d-452a-b299-c95e8d738dc0",
      username: "organicpeacock632",
      password: "moore",
      salt: "PjZtjNQj",
      md5: "c09c002f73262d8f0dabaf5741f43e36",
      sha1: "790fea380f8e853e31bc6a6e2fc563d260b5f38d",
      sha256:
        "32a4753a86ed8c138f0480a4788fa01052e292be2cc661a2b7d4da8e1b3e92ea",
    },
    dob: {
      date: "1964-04-20T18:17:11.622Z",
      age: 61,
    },
    registered: {
      date: "2020-02-06T15:15:04.423Z",
      age: 5,
    },
    phone: "(842)-587-0631",
    cell: "(049)-620-2033",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
    },
    nat: "TR",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Theo",
      last: "Cooper",
    },
    location: {
      street: {
        number: 4790,
        name: "Andersons Bay Road",
      },
      city: "Dunedin",
      state: "Wellington",
      country: "New Zealand",
      postcode: 15708,
      coordinates: {
        latitude: "34.6700",
        longitude: "-40.9669",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "theo.cooper@example.com",
    login: {
      uuid: "307ea404-055c-41e1-a702-e1ff3a07592e",
      username: "tinydog828",
      password: "blondie",
      salt: "80lNaDuM",
      md5: "ec1a550994b1739430451da6ddc3c0d1",
      sha1: "32259ce3a8be8ea76e061b05f510de35bcaaf867",
      sha256:
        "fcb01ecead8df849f341be89a74a2d83ecd13becc234a8faaddd2eb418bfe463",
    },
    dob: {
      date: "1947-12-12T21:13:34.549Z",
      age: 77,
    },
    registered: {
      date: "2019-12-03T15:21:28.508Z",
      age: 5,
    },
    phone: "(170)-616-0238",
    cell: "(255)-827-4828",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/61.jpg",
    },
    nat: "NZ",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Samuel",
      last: "Clement",
    },
    location: {
      street: {
        number: 6557,
        name: "Rue de L'Abbé-Gillet",
      },
      city: "Toulouse",
      state: "Nord",
      country: "France",
      postcode: 47992,
      coordinates: {
        latitude: "-60.8820",
        longitude: "111.5760",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "samuel.clement@example.com",
    login: {
      uuid: "0e92c0a2-a044-4d38-8e3b-7d4d60d2aa8e",
      username: "greenswan627",
      password: "ginger",
      salt: "VXODxhVt",
      md5: "81e59022e8620ab7c6c57720203d25bb",
      sha1: "8739111ccfcfc0fd80677741091cf89521d302ec",
      sha256:
        "0f2ba102fbe2a57cd4c34fc4923f315c9d2c2eca666bc838dbeac3ed8e82c1fb",
    },
    dob: {
      date: "1975-10-17T03:31:29.364Z",
      age: 50,
    },
    registered: {
      date: "2002-06-09T11:55:39.840Z",
      age: 23,
    },
    phone: "01-22-95-22-64",
    cell: "06-98-05-27-64",
    id: {
      name: "INSEE",
      value: "1750961752201 44",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Mia",
      last: "David",
    },
    location: {
      street: {
        number: 7330,
        name: "Rue Victor-Hugo",
      },
      city: "Aubervilliers",
      state: "Seine-Saint-Denis",
      country: "France",
      postcode: 55655,
      coordinates: {
        latitude: "40.3896",
        longitude: "-28.0283",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "mia.david@example.com",
    login: {
      uuid: "cca762c5-65d9-4801-a44e-944a7fd093ba",
      username: "tinygoose899",
      password: "dalshe",
      salt: "imVWrgP5",
      md5: "ce6668aae595642a80143f71fb049b80",
      sha1: "54c1406f40653e91581a5ff76ae400cd4ccd3d7b",
      sha256:
        "89c126ca3a50cef795f77cd856414dab05c743ac90aa25c4731a4b83d480c9ce",
    },
    dob: {
      date: "1953-05-31T07:06:58.025Z",
      age: 72,
    },
    registered: {
      date: "2022-01-25T02:29:20.168Z",
      age: 3,
    },
    phone: "05-57-90-19-90",
    cell: "06-84-01-98-71",
    id: {
      name: "INSEE",
      value: "2530442525149 25",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/15.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    },
    nat: "FR",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Danilo",
      last: "Simeonović",
    },
    location: {
      street: {
        number: 9030,
        name: "Veroljuba Atanasijevića",
      },
      city: "Bogatić",
      state: "Šumadija",
      country: "Serbia",
      postcode: 77701,
      coordinates: {
        latitude: "-12.3426",
        longitude: "49.7653",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "danilo.simeonovic@example.com",
    login: {
      uuid: "2c934026-cc31-48bf-9d82-3cc41ae4e6e2",
      username: "beautifulsnake524",
      password: "kerry",
      salt: "bjZiZlQ5",
      md5: "9d5280d6f454ff982082d1aac35c84de",
      sha1: "e3c9ed54aa31a0d9b21aaee1de24d0fe7f3c481e",
      sha256:
        "96547206372638b7da99abdb74ccb8a5b9f6cd419629cf4f1e3d3f799b3930e5",
    },
    dob: {
      date: "1952-10-05T07:00:48.423Z",
      age: 73,
    },
    registered: {
      date: "2006-10-22T15:28:32.127Z",
      age: 19,
    },
    phone: "021-2132-863",
    cell: "068-9219-852",
    id: {
      name: "SID",
      value: "582632851",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
    },
    nat: "RS",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Danka",
      last: "Nenadović",
    },
    location: {
      street: {
        number: 8559,
        name: "Jovana Stejića",
      },
      city: "Novi Kneževac",
      state: "Pomoravlje",
      country: "Serbia",
      postcode: 57074,
      coordinates: {
        latitude: "87.0974",
        longitude: "-123.0924",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "danka.nenadovic@example.com",
    login: {
      uuid: "e8cf01fe-0e61-42ed-b173-94817ed42b3e",
      username: "purpletiger365",
      password: "matrix1",
      salt: "u213WDWp",
      md5: "65422c7af77faeea612f7e8c10145c7a",
      sha1: "dcaf00e0ab2b54592fcd0a3f92ba0df8e744b84c",
      sha256:
        "d456f5cddf2a99e46dec5f649e31e8b0848b14f5fb8ff586f21cc62d7ebe6509",
    },
    dob: {
      date: "1970-10-13T15:52:28.232Z",
      age: 55,
    },
    registered: {
      date: "2009-09-09T01:32:17.563Z",
      age: 16,
    },
    phone: "030-6601-471",
    cell: "066-7135-066",
    id: {
      name: "SID",
      value: "004220563",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/35.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
    },
    nat: "RS",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "امیر",
      last: "کامروا",
    },
    location: {
      street: {
        number: 8509,
        name: "میدان توحید",
      },
      city: "قزوین",
      state: "سیستان و بلوچستان",
      country: "Iran",
      postcode: 26250,
      coordinates: {
        latitude: "71.4327",
        longitude: "-131.1232",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "myr.khmrw@example.com",
    login: {
      uuid: "dc02d2d3-ae80-4d72-ba92-3253da6de31e",
      username: "whitefish456",
      password: "just4fun",
      salt: "20NHLUeM",
      md5: "9e301d85f2884e4547713f0619996996",
      sha1: "b7109eaec78aff12e6f939e60530e253a31b4071",
      sha256:
        "57ab977f890c53355181836bc33b825d512639dd4ec2b995525fb626a08b2d0f",
    },
    dob: {
      date: "1947-10-02T04:20:03.506Z",
      age: 78,
    },
    registered: {
      date: "2021-01-08T13:49:58.660Z",
      age: 4,
    },
    phone: "016-32534704",
    cell: "0979-940-1777",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Eva",
      last: "Johnson",
    },
    location: {
      street: {
        number: 7162,
        name: "Alfred St",
      },
      city: "Bath",
      state: "Saskatchewan",
      country: "Canada",
      postcode: "P0I 3F6",
      coordinates: {
        latitude: "65.7028",
        longitude: "2.3173",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "eva.johnson@example.com",
    login: {
      uuid: "39d3954d-83d8-4275-ad58-985ddec7c499",
      username: "heavygoose489",
      password: "chevy1",
      salt: "td7JGt6K",
      md5: "80ac97aa4b5904d643457120d20cfedf",
      sha1: "65113a5120b533f1b07b9f5c9d386cc682019553",
      sha256:
        "dcce7ed9651dfe48d630ccf3d944f388d5de402be87dd764f2b3c2bfbef1fd10",
    },
    dob: {
      date: "1980-02-19T00:16:17.803Z",
      age: 45,
    },
    registered: {
      date: "2012-05-12T06:10:46.275Z",
      age: 13,
    },
    phone: "N90 R94-2590",
    cell: "N74 R95-7646",
    id: {
      name: "SIN",
      value: "336334701",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Zayan",
      last: "Gupta",
    },
    location: {
      street: {
        number: 7880,
        name: "Kasturba Rd",
      },
      city: "Motihari",
      state: "Andhra Pradesh",
      country: "India",
      postcode: 42710,
      coordinates: {
        latitude: "70.2752",
        longitude: "-73.9521",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "zayan.gupta@example.com",
    login: {
      uuid: "755e0aa0-17b2-49b1-980b-a0063419a593",
      username: "organicbutterfly933",
      password: "dancer",
      salt: "gP1nRfGd",
      md5: "925160f8963552b7dac3a26dbc46a42b",
      sha1: "8d6ee0cc4502bc0656a26a3a7558fcf3ca81c91a",
      sha256:
        "5e2e64ea5b4d99390355cae89fb89a59efc729e23a03eb35ee2d0da5341638db",
    },
    dob: {
      date: "1958-06-28T22:29:27.186Z",
      age: 67,
    },
    registered: {
      date: "2012-08-01T22:52:24.359Z",
      age: 13,
    },
    phone: "8757945362",
    cell: "9004503617",
    id: {
      name: "UIDAI",
      value: "501014645022",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    },
    nat: "IN",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Kerttu",
      last: "Wirtanen",
    },
    location: {
      street: {
        number: 3144,
        name: "Mechelininkatu",
      },
      city: "Loviisa",
      state: "Kymenlaakso",
      country: "Finland",
      postcode: 12131,
      coordinates: {
        latitude: "-46.8242",
        longitude: "111.1571",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "kerttu.wirtanen@example.com",
    login: {
      uuid: "5dbb72df-a89c-4197-a460-e01a63957b07",
      username: "heavycat103",
      password: "1235",
      salt: "NjxuEcnu",
      md5: "28c465b74478151fe2ff054e947f532a",
      sha1: "d5478a09106acee1dbb974c2212f97ed66730914",
      sha256:
        "23422011a49368538a15d5daae31991b059bc36444cf9a89660ef589ce062037",
    },
    dob: {
      date: "1946-04-10T21:04:38.459Z",
      age: 79,
    },
    registered: {
      date: "2021-08-21T05:24:33.819Z",
      age: 4,
    },
    phone: "09-371-688",
    cell: "041-520-60-43",
    id: {
      name: "HETU",
      value: "NaNNA364undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg",
    },
    nat: "FI",
  },
  {
    info: {
      seed: "e8a6b5b74157ee0e",
      results: 10,
      page: 1,
      version: "1.4",
    },
  },
];

renderoneusersList(usersArray);

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

// SECCIÓN DE FUNCIONES DE EVENTOS
// Aquí van las funciones handler/manejadoras de eventos

// SECCIÓN DE EVENTOS
// Éstos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)
