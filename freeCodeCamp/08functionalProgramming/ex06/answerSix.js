// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(library, bookName) {
    let newLibrary = [...library];
    newLibrary.push(bookName);
    return newLibrary
  
  // Change code above this line
};
// Change code below this line
function remove(library, bookName) {
    let removedLibrary = [...library];
    if (removedLibrary.indexOf(bookName) >= 0) {
         removedLibrary.splice(removedLibrary.indexOf(bookName), 1);
        return removedLibrary;
    };
    // Change code above this line
};


console.log(add(bookList, "A Brief History of Time"));