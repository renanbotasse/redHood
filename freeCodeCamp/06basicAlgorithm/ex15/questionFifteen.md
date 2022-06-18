Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

Tests
Waiting:mutation(["hello", "hey"]) should return false.
Waiting:mutation(["hello", "Hello"]) should return true.
Waiting:mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Waiting:mutation(["Mary", "Army"]) should return true.
Waiting:mutation(["Mary", "Aarmy"]) should return true.
Waiting:mutation(["Alien", "line"]) should return true.
Waiting:mutation(["floor", "for"]) should return true.
Waiting:mutation(["hello", "neo"]) should return false.
Waiting:mutation(["voodoo", "no"]) should return false.
Waiting:mutation(["ate", "date"]) should return false.
Waiting:mutation(["Tiger", "Zebra"]) should return false.
Waiting:mutation(["Noel", "Ole"]) should return true.