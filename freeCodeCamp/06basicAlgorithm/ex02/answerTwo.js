function reverseString(str) {
    let bolovo = [...str].reverse();
    let ovoDoBolovo = bolovo.join('');
    return ovoDoBolovo
}

console.log(reverseString("Ei Pocoyo, como vai você?"));