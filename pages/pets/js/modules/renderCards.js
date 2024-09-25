export const renderCards = (pets, container) => {
  const petsContainer = document.querySelector(".js-pets-list");
  const pagination = document.querySelector(".js-pagination");
  let pageNumber = document.querySelector(".slider-button__item_number");
  const btnPagination = document.querySelectorAll(".slider-button__item");
  const arrowLeftEnd = document.querySelector(".arrow-left-end");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const arrowRightEnd = document.querySelector(".arrow-right-end");

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
        if (item.classList.contains("arrow-left-end")) {
          currentPage = 1;
          pageNumber.textContent = currentPage;
          arrowLeft.classList.add("disabled");
          arrowLeft.classList.remove("active");
          arrowLeftEnd.classList.add("disabled");
          arrowLeftEnd.classList.remove("active");
          arrowRight.classList.remove("disabled");
          arrowRightEnd.classList.remove("disabled");
          arrowRight.classList.add("active");
          arrowRightEnd.classList.add("active");
          arrowLeft.disabled = true;
          arrowLeftEnd.disabled = true;
          arrowRight.disabled = false;
          arrowRightEnd.disabled = false;
        }
        if (item.classList.contains("arrow-left")) {
          if (currentPage > 1) {
            currentPage--;
            pageNumber.textContent = currentPage;
            arrowLeft.disabled = false;
            arrowLeftEnd.disabled = false;
            arrowRight.disabled = false;
            arrowRightEnd.disabled = false;
          }
          if (currentPage == 1) {
            arrowLeft.classList.add("disabled");
            arrowLeft.classList.remove("active");
            arrowLeftEnd.classList.add("disabled");
            arrowLeftEnd.classList.remove("active");
            arrowRight.classList.remove("disabled");
            arrowRightEnd.classList.remove("disabled");
            arrowRight.classList.add("active");
            arrowRightEnd.classList.add("active");
            arrowLeft.disabled = true;
            arrowLeftEnd.disabled = true;
            arrowRight.disabled = false;
            arrowRightEnd.disabled = false;
          }
        }
        if (item.classList.contains("arrow-right")) {
          arrowRight.classList.remove("disabled");
          arrowRightEnd.classList.remove("disabled");
          arrowRight.classList.add("active");
          arrowRightEnd.classList.add("active");
          arrowLeft.classList.remove("disabled");
          arrowLeft.classList.add("active");
          arrowLeftEnd.classList.remove("disabled");
          arrowLeftEnd.classList.add("active");
          currentPage++;
          pageNumber.textContent = currentPage;
          arrowLeft.disabled = false;
          arrowLeftEnd.disabled = false;
          if (currentPage == pageCount) {
            arrowRight.classList.add("disabled");
            arrowRightEnd.classList.add("disabled");
            arrowRight.classList.remove("active");
            arrowRightEnd.classList.remove("active");
            arrowLeft.classList.remove("disabled");
            arrowLeft.classList.add("active");
            arrowLeftEnd.classList.remove("disabled");
            arrowLeftEnd.classList.add("active");
            arrowRight.disabled = true;
            arrowRightEnd.disabled = true;
          }
        }
        if (item.classList.contains("arrow-right-end")) {
          arrowLeftEnd.classList.remove("disabled");
          arrowLeftEnd.classList.add("active");
          arrowLeft.classList.remove("disabled");
          arrowLeft.classList.add("active");
          currentPage = petsArray.length / numberOfPets;

          pageNumber.textContent = currentPage;
          arrowLeft.disabled = false;
          arrowLeftEnd.disabled = false;
          console.log("the end");

          arrowRight.classList.add("disabled");
          arrowRightEnd.classList.add("disabled");
          arrowRight.classList.remove("active");
          arrowRightEnd.classList.remove("active");
          arrowRight.disabled = true;
          arrowRightEnd.disabled = true;
        }
        renderProducts(petsArray, petsContainer, petsCount, currentPage);
      });
    });
  };

  renderProducts(petsArray, petsContainer, petsCount, currentPage);
  renderPagination(petsArray, petsCount);
};
