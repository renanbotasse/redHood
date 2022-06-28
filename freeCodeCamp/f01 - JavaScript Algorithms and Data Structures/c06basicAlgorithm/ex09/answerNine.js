function findElement(arr, func) {
    return arr.filter(func)[0];
   
}
  console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));