const leia = require('readline-sync');

let salario;
let abono;
let novosalario;

salario = leia.questionFloat("Informe o salario: ")
abono = leia.questionFloat("Informe o abono: ")

novosalario = salario + abono

const formatado = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(novosalario);

console.log(`Seu novo salario: ${formatado}`)