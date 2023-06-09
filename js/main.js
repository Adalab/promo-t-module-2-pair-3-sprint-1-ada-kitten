'use strict';

// INFORMACIÓN

// Query Selectors
const listElement = document.querySelector('.js-list');
const input_race =  document.querySelector('.js_input_race');
// Búsqueda
const input_search_desc = document.querySelector('.js_in_search_desc');
const buttonSearch = document.querySelector('.js-button-search');
const race = input_race.value; // búsqueda por race, pendiente
// Eventos
const plusBtn = document.querySelector(".js-btn-plus");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const sectionForm = document.querySelector('.js-form');
const addBtn = document.querySelector(".js-btn-add");
const cancelBtn = document.querySelector(".js-btn-cancel");
let valueDesc = inputDesc.value;
let valuePhoto = inputPhoto.value;
let valueName = inputName.value;




const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés'
}

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx'
}

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon'
}

const kittenData_4 = {
  image: 'http://placekitten.com/g/200/300',
  name: 'Lola',
  desc:'Un gato muy bonito',
  race: 'Común Europeo'
}

// Arrays

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3, kittenData_4];


// FUNCIONES

function renderKittenList (kittenDataList) { 
  listElement.innerHTML = '';
  for (let i = 0; i < kittenDataList.length; i++) {
    listElement.innerHTML += renderKitten(kittenDataList[i]);
  }
}

const renderKitten = (kittenData) => {
  let html = '';
  function renderRace() {
    if (kittenData.race === "") {
      return `Uy que despiste, no sabemos su raza`;
    } else {
      return kittenData.race;
    }
  }
  let htmlCode = `<li class="card">`;
  htmlCode += `<img class="card_img"src=" ${kittenData.image}" alt="maine-coon-cat" />`;
  htmlCode += `<h3 class="card_title">${kittenData.name.toUpperCase()}</h3>`;
  htmlCode += `<h4 class="card_race">${ renderRace() }</h4>`;
  htmlCode += `<p class="card_description">${kittenData.desc}</p>`;
  htmlCode += `</li>`;
  return htmlCode;
}

renderKittenList(kittenDataList);

//console.log(renderKittenList(kittenDataList)); 
  /*const kittenOne = renderKitten(kittenDataList[0]);

  const kittenTwo = renderKitten(kittenDataList[1]);

  const kittenThree = renderKitten(kittenDataList[2]);
      
  const kittenFour = renderKitten(kittenDataList[3]); */


// MOSTRAR / OCULTAR EL FORMULARIO AÑADIR GATITO CON FUNCIONES

function showNewCatForm () {
  sectionForm.classList.remove('collapsed');
}

function hideNewCatForm () {
  sectionForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (sectionForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

function addNewKitten () {
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo.';
  } else {
  }
}

// Búsqueda

const filterKitten = (event) => {
  event.preventDefault();
  listElement.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  const raceSearch = input_race.value;
  for (const kittenItem of kittenDataList) {
    if(kittenItem.desc.includes(descrSearchText) && kittenItem.race.includes(raceSearch)) {
      listElement.innerHTML += renderKitten(kittenItem);
    }
    //Completa el código
    //Comprueba si cada gatito contiene la descripción
    //Si la contiene pintamos un gatito
    //utilizando la función renderKitten(kittenItem)
  }
  /* if (kittenData_1.desc.includes(descrSearchText) && kittenData_1.race.includes(raceSearch)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenData_2.desc.includes(descrSearchText) && kittenData_2.race.includes(raceSearch) ) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenData_3.desc.includes(descrSearchText) && kittenData_3.race.includes(raceSearch)) {
    listElement.innerHTML += kittenThree;
  }
  if (kittenData_4.desc.includes(descrSearchText) && kittenData_4.race.includes(raceSearch)) {
    listElement.innerHTML += kittenFour;
  } */
};

  /*let html = '';
  if (kittenRace1 === "") {
      html = kittenRace1;
    //console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    //console.log(html);
  }

  if (kittenRace2 === '') {
    html = kittenRace2;
    console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    //console.log(html);
  }

  if (kittenRace3 === 'Maine Coon') {
    html = kittenRace3;
    console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    console.log(html);
  } 

  if (kittenRace4 === 'Maine Coon') {
    html = kittenRace4;
    //console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    //console.log(html);
  } 
}*/

/* listElement.innerHTML = kittenOne + kittenTwo + kittenThree + kittenFour; */

// EVENTOS

buttonSearch.addEventListener('click', filterKitten);
// buttonSearch.addEventListener('click', filterRaceKitten);

plusBtn.addEventListener('click', handleClickNewCatForm);

addBtn.addEventListener( 'click', addNewKitten);

cancelBtn.addEventListener( 'click', () => {
  sectionForm.classList.toggle('collapsed');
  labelMessageError.innerHTML = '';
  valueDesc = "";
  valuePhoto = "";
  valueName = "";
})

