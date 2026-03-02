const leia = require('readline-sync')

let salariobr;
let adcnoturno;
let horaextra;
let desconto;
let salarioliq;

salariobr = leia.questionFloat("\nInsira o salario bruto: ")
adcnoturno = leia.questionFloat("\nInforme o adicional noturno: ")
horaextra = leia.questionFloat("\nInforme o recebimento da hora extra: ")
desconto = leia.questionFloat("\nInforme os descontos: ")

salarioliq = salariobr + adcnoturno + (horaextra * 5) - desconto

const formatado = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
     currency: 'BRL'
    }).format(salarioliq)
console.log(`\nDe acordo com as informação, seu salário líquido é: ${formatado}`)