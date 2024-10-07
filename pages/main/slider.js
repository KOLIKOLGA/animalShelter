// import { pets } from "../pets/js/pets.js";
export const slider = (pets) => {
  const prevBtn = document.querySelector(".arrow-left");
  const nextBtn = document.querySelector(".arrow-right");
  const sliderBlock = document.querySelector(".slider__list");

  let i = 0;

  const mixArr = (arr) => {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  };
  let arrayPets = mixArr(pets);
  arrayPets.push(arrayPets[0]);
  console.log(arrayPets);

  const renderSlider = () => {
    sliderBlock.innerHTML = "";
    arrayPets.forEach(({ img, name }) => {
      const li = document.createElement("li");
      li.classList.add("slider-card", "link");

      li.innerHTML = `
    <img
                     src="../assets/images/${img}"
                     alt="${name}"
                   />

                   <div class="button-section">
                     <h3 class="slider-card__title">${name}</h3>
                     <button class="btn-reset slider__button btn link">
                       Learn more
                     </button>
                   </div>
  `;
      sliderBlock.append(li);
    });
  };

  prevBtn.addEventListener("click", () => {
    console.log("prev");
  });
  nextBtn.addEventListener("click", () => {
    console.log("next");
  });

  const moveRight = () => {
    sliderBlock.classList.add("transition-right");
    nextBtn.removeEventListener("click", moveRight);
    prevBtn.removeEventListener("click", moveLeft);
  };

  const moveLeft = () => {
    sliderBlock.classList.add("transition-left");
    nextBtn.removeEventListener("click", moveRight);
    prevBtn.removeEventListener("click", moveLeft);
  };

  nextBtn.addEventListener("click", moveRight);
  prevBtn.addEventListener("click", moveLeft);

  sliderBlock.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      sliderBlock.classList.remove("transition-left");

      arrayPets.splice(5, 0, arrayPets.splice(0, 1)[0]);
      arrayPets.splice(5, 0, arrayPets.splice(0, 1)[0]);
      arrayPets.splice(5, 0, arrayPets.splice(0, 1)[0]);

      arrayPets.splice(8, 0, arrayPets.splice(0, 1)[0]);
      arrayPets.splice(8, 0, arrayPets.splice(0, 1)[0]);
      arrayPets.splice(8, 0, arrayPets.splice(0, 1)[0]);

      arrayPets.splice(0, 0, arrayPets.splice(5, 1)[0]);
      arrayPets.splice(0, 0, arrayPets.splice(5, 1)[0]);
      arrayPets.splice(0, 0, arrayPets.splice(5, 1)[0]);
      console.log(arrayPets);

      renderSlider();
    } else {
      sliderBlock.classList.remove("transition-right");
      arrayPets.splice(8, 0, arrayPets.splice(0, 1)[0]);
      arrayPets.splice(8, 0, arrayPets.splice(0, 1)[0]);
      arrayPets.splice(8, 0, arrayPets.splice(0, 1)[0]);

      console.log(arrayPets);

      renderSlider();
    }

    nextBtn.addEventListener("click", moveRight);
    prevBtn.addEventListener("click", moveLeft);
  });

  renderSlider();
};
