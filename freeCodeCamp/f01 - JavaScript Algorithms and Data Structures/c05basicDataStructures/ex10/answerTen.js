function quickCheck(arr, elem) {
    // Only change code below this line
  let bolota = arr.indexOf(elem);
if (bolota >= 0) {
    return true;
}
return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));