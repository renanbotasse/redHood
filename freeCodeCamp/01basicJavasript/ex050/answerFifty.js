


function functionWithArgs(one, two) {
    console.log(one + two)
}
functionWithArgs(1,2)
functionWithArgs(7,9)


 nome = "Pocoyo ";
 idade = "28 ";
 genero = "Helicoptero Apache";

function apresentarDados (nomeDoUsuario, idadeDoUsuario, generoDoUsuario) {
    console.log(generoDoUsuario + idadeDoUsuario + nomeDoUsuario)
}

apresentarDados(genero, idade, nome);


/* 
You can use "Parameters" to make "function generic"
If you Data Base havee data to use, you can creat function whit PARAMETERS (values to be filed)
PARAMETERS are FULLFILED with ARGUMENTS
------------------------------THIS IS DATA BASE-------------------------------------
let nome = "Pocoyo ";
let idade = "28 ";
let genero = "Helicoptero Apache";
------------------------------THIS IS PARAMETERS-----------------------------------
function apresentarDados (nomeDoUsuario, idadeDoUsuario, generoDoUsuario) {
    console.log(generoDoUsuario + idadeDoUsuario + nomeDoUsuario)
}
-----------------------------THIS IS ARGUMENTS USING DATA BASE---------------------
apresentarDados(genero, idade, nome);
*/