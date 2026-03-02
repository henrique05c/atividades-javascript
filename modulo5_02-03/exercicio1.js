const leia = require('readline-sync');

let salario;
let abono;
let novosalario;

salario = leia.questionFloat("\nInforme o salario: ")
abono = leia.questionFloat("\nInforme o abono: ")

novosalario = salario + abono

const formatado = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(novosalario);

console.log(`\nSeu novo salario: ${formatado}`)