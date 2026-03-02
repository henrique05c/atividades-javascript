const leia = require('readline-sync')

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = leia.questionFloat("\nInforme a primeira nota: ")
nota2 = leia.questionFloat("\nInforme a segunda nota: ")
nota3 = leia.questionFloat("\nInforme a terceira nota: ")
nota4 = leia.questionFloat("\nInforme a quarta nota: ")

media = (nota1 + nota2 + nota3 + nota4)/4

console.log(`\nA média da sua nota final é: ${media}`)