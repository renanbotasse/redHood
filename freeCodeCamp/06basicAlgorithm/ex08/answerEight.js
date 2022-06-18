function truncateString(str, num) {
    let arr = [...str]
    let bolo = arr.slice(0, num)
    if (arr.length > num) {
        return bolo.join("")+"...";
    } else {
    return bolo.join("");
  }
}
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));