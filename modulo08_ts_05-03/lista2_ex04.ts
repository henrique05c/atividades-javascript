import readlineSync from "readline-sync";

const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numeroDigitado: number;

numeroDigitado = readlineSync.questionInt("Digite o numero que voce deseja encontrar: ");

if (numeros.has(numeroDigitado)) {
    console.log(`O numero ${numeroDigitado} foi encontrado!`);
} else {
    console.log(`O numero ${numeroDigitado} nao foi encontrado!`);
}