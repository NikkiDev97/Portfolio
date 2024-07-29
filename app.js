
//-------------- Inicio cambio de modo claro/oscuro -------------- 

// TODO completar la funcion para que cambien los colores de los boxes y la letra. No se veían tan bien los colores pastel claro; el tiempo no me dio para mirar otros.
const modeBoxArray = [
  {
    element: document.body,
    lightColor: '#e7f2f8',
    darkColor: '#1f1f1f',
  },
  // {
  //   element: document.getElementsByClassName('welcome')[0],
  //   lightColor: '#96dcff',
  //   darkColor: '#66ccff',
  // },
  // {
  //   element: document.getElementsByClassName('language')[0],
  //   lightColor: '#fdeea3',
  //   darkColor: '#f5dd63',
  // },
  // {
  //   element: document.getElementsByClassName('toggle-lang')[0],
  //   lightColor: '#fa9ea7',
  //   darkColor: '#e64553',
  // },
  // {
  //   element: document.getElementsByClassName('mode')[0],
  //   lightColor: '#949090',
  //   darkColor: '#4e4e4e',
  // },
  // {
  //   element: document.getElementsByClassName('links')[0],
  //   lightColor: '#f5d8e8',
  //   darkColor: '#f6b2d7',
  // },
  // {
  //   element: document.getElementsByClassName('about')[0],
  //   lightColor: '#cdb7f8',
  //   darkColor: '#9966ff',
  // },
  // {
  //   element: document.getElementsByClassName('skills')[0],
  //   lightColor: '#fa9ea7',
  //   darkColor: '#FA6977',
  // },
  // {
  //   element: document.getElementsByClassName('learning')[0],
  //   lightColor: '#fdeea3',
  //   darkColor: '#ffe666',
  // },
]

// const modeContentArray = [  
//   {
//     element: document.getElementsByClassName('language')[0].children[0],
//     lightColor: '#fa9ea7',
//     darkColor: '#e64553',
//   },
//   {
//     element: document.getElementsByClassName('skills')[0].children[0],
//     lightColor: '#f33448',
//     darkColor: 'white',
//   },
//   {
//     element: document.getElementsByClassName('learning')[0].children[0],
//     lightColor: '#1F1F1F',
//     darkColor: 'white',
//   },
// ]

let pageMode = "dark";
const modeBox = document.getElementsByClassName('mode')[0];
modeBox.addEventListener('click', changeMode);
function changeMode(){
  for(let item of modeBoxArray){
    if(pageMode === "dark"){
      item.element.style.backgroundColor = item.lightColor;
    }else{
      item.element.style.backgroundColor = item.darkColor;
    }
  }
  // for(let item of modeContentArray){
  //   console.log(item)
  //   if(pageMode === "dark"){
  //     item.element.style.color = item.lightColor;
  //   }else{
  //     item.element.style.color = item.darkColor;
  //   }
  // }
  if(pageMode === "dark"){
    pageMode = "light";
  }else{
    pageMode = "dark"
  }

  changeModeImage();
}


function changeModeImage(){
  if(pageMode === "dark"){
    modeBox.style.backgroundImage = "url('https://res.cloudinary.com/dk16s84va/image/upload/v1722210953/lightmode.gif')";
    modeBox.style.backgroundColor = "#fffefe";

  }
  else{
    modeBox.style.backgroundImage = "url('https://res.cloudinary.com/dk16s84va/image/upload/v1722210954/darkmode.gif')";
    modeBox.style.backgroundColor = "#white";
  }
}
// -------------- Final cambio de modo claro/oscuro-------------- //


// TODO funcion js traducción


// --------------Inicio función para animar los scrolls --------------//
// TODO falta incluir el icon pause

let isMoving1 = false;
let isMoving2 = false;

const skillsButton = document.querySelector(".playbutton1");
skillsButton.addEventListener("click", playPauseScroll1)
const scrolls1 = document.querySelectorAll(".scroll-content-1");

const learningButton = document.querySelector(".playbutton2");
learningButton.addEventListener("click", playPauseScroll2)
const scrolls2 = document.querySelectorAll(".scroll-content-2");


function playPauseScroll1 (){
  scrolls1.forEach((element) => {
    if (isMoving1){
      element.style.animationPlayState = "paused";
    }
    else{
      element.style.animationPlayState = "running";
    }
  })
  isMoving1 = !isMoving1;
}
function playPauseScroll2 (){
  scrolls2.forEach((element) => {
    if (isMoving2){
      element.style.animationPlayState = "paused";
    }
    else{
      element.style.animationPlayState = "running";
    }
  })
  isMoving2 = !isMoving2;
}

// --------------Fin función para animar los scrolls --------------//

// TODO función js para validar formulario. 
// *Ojo, en css hay un desajuste en desktop con la posicion de las etiquetas.

// INICIO Cambio de posición de los labels del formulario cuando hay texto al interior de un input
// const emailLabel = document.querySelector('label[for="email"]');
// const emailInput = document.getElementById('email');
// emailInput.addEventListener('blur', function() {
//   if (emailInput.value.trim() !== "") {
//     emailLabel.style.top = '7px';
//   }else{
//     if(emailInput !== document.activeElement){
//       emailLabel.style.top = '50%';
//     }else{
//       emailLabel.style.top = '7px';
//     }
//   }
// });

// emailInput.addEventListener('focus', function() {
//   emailLabel.style.top = '7px';
// });
// FIN Cambio de posición de los labels del formulario cuando hay texto al interior de un input



// ----------INICIO SCROLL UP BUTTON ----------//

upButton= document.querySelector('.scroll-up')
upButton.addEventListener('click', function() {
window.scrollTo({
  top: 0,
  behavior: 'smooth' 
  });
});

// ----------FIN SCROLL UP BUTTON ----------//








