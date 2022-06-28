function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, X => X.toUpperCase());
  }
  
  
  console.log(titleCase("I'm a little tea pot"));