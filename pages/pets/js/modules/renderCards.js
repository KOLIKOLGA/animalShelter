export const renderCards = (pets, container) => {
  let result = [];
  let result1 = [];
  let result2 = [];
  let result3 = [];
  let result4 = [];
  let result5 = [];

  let petsArray = [];

  result = pets
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
  console.log(result);

  result1 = pets
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);

  result2 = pets
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);

  result3 = pets
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);

  result4 = pets
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);

  for (let i = 0; i < pets.length; i++) {
    petsArray.push(pets[i]);
  }
  for (let i = 0; i < result.length; i++) {
    petsArray.push(result[i]);
  }
  for (let i = 0; i < result1.length; i++) {
    petsArray.push(result1[i]);
  }
  for (let i = 0; i < result2.length; i++) {
    petsArray.push(result2[i]);
  }
  for (let i = 0; i < result3.length; i++) {
    petsArray.push(result3[i]);
  }
  for (let i = 0; i < result4.length; i++) {
    petsArray.push(result4[i]);
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
