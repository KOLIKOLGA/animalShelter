import { pets } from "./pets.js";
import { renderCards } from "./modules/renderCards.js";
import { randomPets } from "./modules/randomPets.js";

window.addEventListener("DOMContentLoaded", () => {
  const petsContainer = document.querySelector(".js-pets-list");
  renderCards(pets, petsContainer);
  randomPets(pets);
});
