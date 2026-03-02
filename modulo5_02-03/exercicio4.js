const leia = require('readline-sync')

let n1;
let n2;
let n3;
let n4;
let dif;

n1 = leia.questionFloat("\nInsira o primeiro numero: ")
n2 = leia.questionFloat("\nInsira o segundo numero: ")
n3 = leia.questionFloat("\nInsira o terceiro numero: ")
n4 = leia.questionFloat("\nInsira o quarto numero: ")

dif = (n1 * n1)-(n3 * n4)

console.log(`\nA deferença entre a o produto de ${n1}x${n2} e ${n3}x${n4} é: ${dif}`)