// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
  let lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
    }
    return lookup[val]
    // Only change code above this line
    return result;
  }
  
  console.log(phoneticLookup("alpha"));