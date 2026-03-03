import leia from "readline-sync";

let numeroA;
let numeroB;
let numeroC;
let resultado;

numeroA = leia.questionInt("Digite o numero A: ");
numeroB = leia.questionInt("Digite o numero B: ");
numeroC = leia.questionInt("Digite o numero C: ");

resultado = numeroA + numeroB

if(resultado > numeroC){
    console.log(`${resultado} é maior que ${numeroC}`);
}else if(resultado == numeroC){
    console.log(`${resultado} é igual a ${numeroC}`);
}else{
    console.log(`${resultado} é menor que que ${numeroC}`);
}