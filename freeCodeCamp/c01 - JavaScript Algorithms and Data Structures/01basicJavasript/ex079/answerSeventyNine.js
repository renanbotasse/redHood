let count = 0;

function cc(card) {
  // Only change code below this line
  if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
  	//alert("2 3 4 5 6");
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
  	return count + " Hold";
  }
  else {
  	return ccount + " Bet";
  }

  // Only change code above this line
}

console.log(cc(10))

/* OTHER RESOLUTION FOR THIS PROBLEM:
let count = 0;

function cc(card) {
  // Only change code below this line

  switch(card) {
  case card = 2:
  case card = 3:
  case card = 4:
  case card = 5:
  case card = 6:
    count++;
    break
  case card = 7:
  case card = 8:
  case card = 9:
    break
  case card = 10:
  case card = "J":
  case card = "Q":
  case card = "K":
  case card = "A":
    count--;
    break
}

let holdBet = "Hold"
  if (count > 0) {
  holdBet = "Bet";
}

return count + " " + holdBet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

*/