Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

Tests
Waiting:Your code should use the sort method.
Waiting:The globalArray variable should not change.
Waiting:nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
Waiting:nonMutatingSort(globalArray) should not be hard coded.
Waiting:The function should return a new array, not the array passed to it.
Waiting:nonMutatingSort([1, 30, 4, 21, 100000]) should return [1, 4, 21, 30, 100000].
Waiting:nonMutatingSort([140000, 104, 99]) should return [99, 104, 140000].