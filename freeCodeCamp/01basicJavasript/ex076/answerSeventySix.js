function caseInSwitch(val) {
    let answer = "";
   // Only change code below this line
   switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
 }

    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(4));

  /* You have to think more simple
  I was tried switch(caseInSwitch(val)) but don't work
  When I try switch(val) woks well
  Why I need put "caseInSwitch(val)" if i can write just (val) 
  
  When you put (val) you DONT need to write "case val = 1" 
  The system know you are talking about the variable, so you just need to 
  write "case 1" and not "case val = 1"*/