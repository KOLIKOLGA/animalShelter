export const randomPets = (pets) => {
  // console.log(pets); //1

  let result = [];
  let randomArrayPet = [];
  let petsArray = [];

  // result = pets
  //   .map((i) => [Math.random(), i])
  //   .sort()
  //   .map((i) => i[1]);
  // console.log(result);

  const mixArr = (arr) => {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  };

  // console.log(mixArr(pets));
  let i;
  for (i = 0; i < 6; i++) {
    petsArray.push(mixArr(pets));
  }
  // console.log(petsArray);
};
