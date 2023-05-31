"use strict";
const ratingElements = document.querySelectorAll(".rating");
let selectedRating = "";
const btnEl = document.querySelector("#btn");
const containerElement = document.querySelector(".container");
ratingElements.forEach((rating) => {
    rating.addEventListener("click", (event) => {
        var _a;
        const target = event.target;
        const parentElement = target.closest(".rating");
        removeActive();
        if (target.classList.contains("rating")) {
            target.classList.add("active");
            selectedRating = target.innerText;
        }
        else {
            (_a = target.closest(".rating")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            selectedRating = parentElement.innerText;
        }
    });
});
function removeActive() {
    ratingElements.forEach((el) => {
        el.classList.remove("active");
    });
}
btnEl === null || btnEl === void 0 ? void 0 : btnEl.addEventListener("click", btnHandler);
function btnHandler() {
    if (containerElement && selectedRating !== "") {
        containerElement.innerHTML = `
  <strong>Thank you!</strong>
  <br>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <br>
  <br>
  <p>We'll use your feedback to improve our customer support.</p>
  `;
    }
}
