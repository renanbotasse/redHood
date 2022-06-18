function confirmEnding(str, target) {
    //return str.slice(str.length - target.length) === target;
let fraseCompleta = str;
let letraProcurada = target;
let regexUsado = new RegExp(letraProcurada + "$" ,"i");
// new RegExp é usado para usar variaveis com o regex
// porém em vez de usar /variavel$/i"
//você precisa colocar os itens que auxiliam na busca entre ""
// o que fica fora do /xxxxx/, normalmente i ou g e etc fica APÓS A ,
// (xxxxxxx,"i") = /xxxxx/i
// o que fica dentro do /xxxxx/ e auxilia na busca, você inclui com +
// (xxxxxx+"$") = /xxxxx$/
//new RegExp(variavel+"auxBusca","auxBusca");
return regexUsado.test(fraseCompleta);
  }
  
  console.log(confirmEnding("Bastian", "tian"));
 
 
 
 
 
 /*   let palavra = str.split("")  
 let letra = target.split("")
 for (i = 0; i < letra.lenght; i++) {
    if (letra[i] === palavra.lenght[i]) {
    return true;
 }
}
 return false;
}

console.log(confirmEnding("bolo", "lo"));
    
    /*let arr = str.split();
    if (target = arr[arr.length-1]) {
        return true
    }
return false;
}
  
console.log(confirmEnding("Bastian", "n"));
*/



    /*
    return str.endsWith(target);
    */