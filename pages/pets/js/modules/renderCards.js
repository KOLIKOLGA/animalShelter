export const renderCards = (pets, container) => {
  let petsArray = [];
  let result = [];

  const mixArr = (arr) => {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  };

  let i;
  for (i = 0; i < 6; i++) {
    result.push(mixArr(pets));
  }

  console.log(result);

  for (i = 0; i < result.length; i++) {
    petsArray = pets.concat(result[1]);
    petsArray = petsArray.concat(result[2]);
    petsArray = petsArray.concat(result[3]);
    petsArray = petsArray.concat(result[4]);
    petsArray = petsArray.concat(result[5]);
  }

  console.log(petsArray);

  petsArray.forEach((pet) => {
    const card = renderCard(pet);
    appendPetCard(card, container);
  });
};

const renderCard = (pet) => {
  const li = document.createElement("li");
  li.classList.add("slider-card", "link");
  li.innerHTML = `
   <img
                    src="../assets/images/${pet.img}"
                    alt="${pet.name}"
                  />

                  <div class="button-section">
                    <h3 class="slider-card__title">${pet.name}</h3>
                    <button class="btn-reset slider__button btn link">
                      Learn more
                    </button>
                  </div>
`;
  return li;
};
const appendPetCard = (pet, container) => {
  container.append(pet);
};
