function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let x = 0; x < arr.length; x++) {
  for (let y = 0; y < arr[x].length; y++) {
    product*=arr[x][y]
  }
}
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));