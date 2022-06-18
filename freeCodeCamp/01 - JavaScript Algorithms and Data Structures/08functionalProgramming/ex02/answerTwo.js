// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea'; //FirstClass

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';//FirstClass

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {//HigherOrder
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea(); //prepareBlackTea
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); 

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);