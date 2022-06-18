function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift()

    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  nextInLine("[]", 5); 
  console.log(nextInLine())
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  // 23/03/2022