// FETCH POPUP ELEMENT
const popupElement = document.querySelector("#contact-popup");

// FETCH ALL POPUP BUTTONS
const popupButtons = document.querySelectorAll(".btn_contact");
popupButtons.forEach((item) => {
  item.addEventListener("click", clickEvent);
});
// CLICK FUNCTION
function clickEvent(clickTarget) {
  popupElement.classList.toggle("active");
}
