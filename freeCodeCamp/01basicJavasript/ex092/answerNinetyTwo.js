// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
if (value == "") {
  delete records[id][prop]  
  return records[id]
  }
  //PRIMEIRO - Se PROP não é TRACK e VALUE não é STRING VAZIA, atualize ALBUM com PROP e VALUE

else if (prop !== "tracks" && value !== "") {
  records[id][prop] = value;
}
  //SEGUNDO - Se PROP é TRACK mas o album não tem uma TRACK, crie uma ARRAY VAZIA e acrescente VALUE
else if (prop === "tracks" && !records[id].hasOwnProperty(prop)) {
  records[id][prop] = [value];
}
  //TERCEIRO - Se PROP é TRACK e o VALUE não é STRING VAZIA, adicione VALUE ao fim do TRACK ARRAY
else if (prop === "tracks" && value !== "") {
  records[id][prop].push(value);
}
  //QUARTO - Se VALUE for EMPETY STRING, delete PROP

  //QUINTO - Retorne sesmpre RECORDCOLLECTIONOBJECT completo
  return records;

}

console.log(updateRecords(recordCollection, 2548, "tracks", ""))

/*

*After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA

*After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.

++++++After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set

*After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

*After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

++++++After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set

*After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string
*/