'use strict';

// INFORMACIÓN

const listElement = document.querySelector('.js-list');

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio' ;
const kittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = ''; //'Siamés';


const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = ''; //'Sphynx';

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = 'Maine Coon';

const input_race =  document.querySelector('.js_input_race');
const race = input_race.value;


function renderKitten (url, name, race, desc) {
  let html = '';
  function renderRace() {
    if (race === "") {
      return `Uy que despiste, no sabemos su raza`;
    } else {
      return race;
    }
    }

  let htmlCode = `<li class="card">`;
    htmlCode += `<img class="card_img"src=" ${url}" alt="maine-coon-cat" />`;
    htmlCode += `<h3 class="card_title">${name.toUpperCase()}</h3>`;
    htmlCode += `<h4 class="card_race">${ renderRace() }</h4>`;
    htmlCode += `<p class="card_description">${desc}</p>`;
    htmlCode += `</li>`;
  return htmlCode;
}
            
  const kittenOne = renderKitten(kittenImage1, kittenName1, kittenRace1, kittenDesc1);

  const kittenTwo = renderKitten(kittenImage2, kittenName2, kittenRace2, kittenDesc2);

  const kittenThree = renderKitten(kittenImage3, kittenName3, kittenRace3, kittenDesc3);
            
  const kittenFour = renderKitten('http://placekitten.com/g/200/300', 'Lola', 'Común Europeo', 'Un gato muy bonito');



// AÑADIR EVENTOS: Adicionar nuevo gatito

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

// MOSTRAR / OCULTAR EL FORMULARIO CON FUNCIONES

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
plusBtn.addEventListener('click', handleClickNewCatForm);

addBtn.addEventListener( 'click', addNewKitten);

cancelBtn.addEventListener( 'click', () => {
  sectionForm.classList.toggle('collapsed');
  labelMessageError.innerHTML = '';
  valueDesc = "";
  valuePhoto = "";
  valueName = "";
})



// BÚSQUEDA 



const input_search_desc = document.querySelector('.js_in_search_desc');

const buttonSearch = document.querySelector('.js-button-search');

// debugger;

const filterKitten = (event) => {
  event.preventDefault();
  listElement.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  if (kittenDesc1.includes(descrSearchText )) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

buttonSearch.addEventListener('click', filterKitten);

listElement.innerHTML = kittenOne + kittenTwo + kittenThree + kittenFour;

// Otra parte
/*
let html = '';

  if (kittenRace1 === "") {
      html = kittenRace1;
    console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    console.log(html);
  }

  if (kittenRace2 === '') {
    html = kittenRace2;
    console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    console.log(html);
  }

  if (kittenRace3 === 'Maine Coon') {
    html = kittenRace3;
    console.log(html);
  } else {
    html = `Uy que despiste, no sabemos su raza`;
    console.log(html);
  } 
*/
