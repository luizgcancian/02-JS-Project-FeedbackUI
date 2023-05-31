const ratingElements = document.querySelectorAll(".rating");
let selectedRating = "";
const btnEl = document.querySelector("#btn");
const containerElement = document.querySelector(".container");

ratingElements.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const parentElement = target.closest(".rating") as HTMLElement;

    removeActive();

    if (target.classList.contains("rating")) {
      target.classList.add("active");
      selectedRating = target.innerText;
    } else {
      target.closest(".rating")?.classList.add("active");
      selectedRating = parentElement.innerText;
    }
  });
});

function removeActive() {
  ratingElements.forEach((el) => {
    el.classList.remove("active");
  });
}

btnEl?.addEventListener("click", btnHandler);
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
