// scripts.js
function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// Cierra el pop-up cuando se hace clic fuera de él
window.onclick = function(event) {
  let popups = document.getElementsByClassName('popup');
  for (let i = 0; i < popups.length; i++) {
      if (event.target == popups[i]) {
          popups[i].style.display = "none";
      }
  }
}
