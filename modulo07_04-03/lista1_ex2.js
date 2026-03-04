import leia from 'readline-sync';

let numero;
let pares = 0;
let impares = 0;

for(let i = 1; i <= 10; i++){

    numero = leia.questionInt(`Digite um numero: `);

    pares = pares + (numero % 2 == 0);
    impares = impares + (numero % 2 != 0);
}

console.log(`\nTotal de numeros pares: ${pares}`);
console.log(`\nTotal de numeros impares: ${impares}`);