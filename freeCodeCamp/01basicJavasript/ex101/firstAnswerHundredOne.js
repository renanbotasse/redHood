// Setup
const contacts = [
     {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

function lookUpProfile(name, prop) {
/*
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/
let primeiro = contacts[0];
let segundo = contacts[1];
let terceiro = contacts[2];
let quarto = contacts[3];

if (name == primeiro.firstName && primeiro.hasOwnProperty(prop)) {
    return primeiro[prop]
} else if (name == segundo.firstName && segundo.hasOwnProperty(prop)) {
    return segundo[prop]
} else if (name == terceiro.firstName && terceiro.hasOwnProperty(prop)) {
    return terceiro[prop]
} else if (name == quarto.firstName && quarto.hasOwnProperty(prop)) {
    return quarto[prop]
} 
  
  else if (name == primeiro.firstName && !primeiro.hasOwnProperty(prop)) {
        return "No such property"
} else if (name == segundo.firstName && !segundo.hasOwnProperty(prop)) {
    return "No such property"
} else if (name == terceiro.firstName && !terceiro.hasOwnProperty(prop)) {
    return "No such property"
} else if (name == quarto.firstName && !quarto.hasOwnProperty(prop)) {
    return "No such property"
}
return "No such contact"
}


console.log(lookUpProfile("Akira", "address"));

/*
ookUpProfile("Kristian", "lastName") should return the string Vos
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") should return an array
lookUpProfile("Bob", "number") should return the string No such contact
lookUpProfile("Bob", "potato") should return the string No such contact
lookUpProfile("Akira", "address") should return the string No such property
*/