export const renderCards = (pets, container) => {
  const petsContainer = document.querySelector(".js-pets-list");
  const pagination = document.querySelector(".js-pagination");
  const pageNumber = document.querySelector(".slider-button__item_number");
  const btnPagination = document.querySelectorAll(".slider-button__item");

  let petsArray = [];
  let result = [];
  let petsCount = 8;
  let currentPage = 1;

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

  for (i = 0; i < result.length; i++) {
    petsArray = pets.concat(result[1]);
    petsArray = petsArray.concat(result[2]);
    petsArray = petsArray.concat(result[3]);
    petsArray = petsArray.concat(result[4]);
    petsArray = petsArray.concat(result[5]);
  }

  console.log(petsArray);

  const renderProducts = (petsArray, container, numberOfPets, page) => {
    petsContainer.innerHTML = "";

    const firstPetIndex = numberOfPets * page - numberOfPets;
    console.log("firstPetIndex: ", firstPetIndex);

    const lastPetIndex = firstPetIndex + numberOfPets;
    console.log("lastPetIndex: ", lastPetIndex);

    const petsOnPage = petsArray.slice(firstPetIndex, lastPetIndex);
    console.log("petsOnPage: ", petsOnPage);

    petsOnPage.forEach(({ img, name }) => {
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
      container.append(li);
    });
  };

  const renderPagination = (petsArray, numberOfPets) => {
    console.log(petsArray.length);
    console.log(numberOfPets);
    const pageCount = Math.ceil(petsArray.length / numberOfPets);
    console.log("pageCount: ", pageCount);

    btnPagination.forEach((item) => {
      item.addEventListener("click", () => {
        pageNumber.textContent = currentPage;
        console.log(pageNumber.textContent);
      });
    });
  };

  renderProducts(petsArray, petsContainer, petsCount, currentPage);
  renderPagination(petsArray, petsCount);

  console.log(btnPagination);
};
