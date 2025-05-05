// FETCH POPUP ELEMENT
const popupElement = document.querySelector("#contact-popup");

// FETCH ALL POPUP BUTTONS
const popupButtons = document.querySelectorAll(".btn_contact");
for (let i = 0; i < popupButtons.length; i++) {
  popupButtons[i].addEventListener("click", clickEvent);
}
// CLICK FUNCTION
function clickEvent(clickTarget) {
  popupElement.classList.toggle("active");
}
