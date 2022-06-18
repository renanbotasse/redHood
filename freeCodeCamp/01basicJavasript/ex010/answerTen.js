const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line



/* Quando você usa VAR você pode substitui por outro VAR. Exemplo
var melhorTimeDoMundo = "Milan";
var melhorTimeDoMundo = "Vasco";
console.log(melhorTimedoMundo);
RESULTADO VAI SER VASCO

Quando você usa LET ele não permite você substituir o LET. Exemplo
let melhorTimeDoMundo = "Milan";
let melhorTimeDoMundo = "Vasco";
console.log(melhorTimeDoMundo);
RESULTADO VAI SER ERRO E VAI APONTAR A DUPLICIDADE DE "melhorTimeDoMundo" linha 14

Porém, você pode alterar o LET (Alterar é diferente de substituir)
let melhorTimeDoMundo = "Milan";
melhorTimeDoMundo = "Vasco";
console.log(melhotTimeDoMundo);
RESULTADO VAI SER VASCO

A diferença para o CONST é que ele você não pode substituir nem mesmo alterar, é feito para se manter imutavel.
Tanto é, que a variavel criada com CONST, deve ser escrita, preferencialmente, em letras maísculas.
const MELHORTIMEDOMUNDO = "Milan";
console.log(MELHORTIMEDOMUNDO)
RESULTADO VAI SER MILAN

Se você acrescentar LET ou VAR vai dar erro.
*/

