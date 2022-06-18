const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
console.log(myData);

  /* This is the same thing of: 
  const arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14] ];
  
  console.log(arr[3]);
  console.log(arr[3][0]);
  console.log(arr[3][0][1]); */