import readlinesync = require("readline-sync");

const numeros: Array<number> = [2,5,1,3,4,9,7,8,10,6];
let numeroDigitado: number;
let encontrado: boolean = false;

numeroDigitado = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ");

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === numeroDigitado){
        console.log(`O numero ${numeroDigitado} esta localizado na posicao: ${i}`);
        encontrado = true;
        break
    }
} if(encontrado === false){
    console.log(`O numero ${numeroDigitado} nao foi encontrado`)
}