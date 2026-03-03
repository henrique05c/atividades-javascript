import leia from "readline-sync";

let tipo;
let classe;
let alimentacao;

console.log("1 - Vertebrado");
console.log("\n2 - Invertebrado");
tipo = leia.questionInt("\nEscolha: ");

if (tipo == 1) {

    console.log("\n1 - Ave");
    console.log("\n2 - Mamifero");
    classe = leia.questionInt("\nEscolha: ");

    if (classe == 1) {

        console.log("\n1 - Carnivoro");
        console.log("\n2 - Onivoro");
        alimentacao = leia.questionInt("\nEscolha: ");

        if (alimentacao == 1) {
            console.log("\nÁguia");
        } else if (alimentacao == 2) {
            console.log("\nPomba");
        }

    } else if (classe == 2) {

        console.log("\n1 - Onivoro");
        console.log("\n2 - Herbivoro");
        alimentacao = leia.questionInt("\nEscolha: ");

        if (alimentacao == 1) {
            console.log("Homem");
        } else if (alimentacao == 2) {
            console.log("\nVaca");
        }
    }

} else if (tipo == 2) {

    console.log("\n1 - Inseto");
    console.log("\n2 - Anelideo");
    classe = leia.questionInt("\nEscolha: ");

    if (classe == 1) {

        console.log("\n1 - Hematofago");
        console.log("\n2 - Herbivoro");
        alimentacao = leia.questionInt("\nEscolha: ");

        if (alimentacao == 1) {
            console.log("\nPulga");
        } else if (alimentacao == 2) {
            console.log("\nLagarta");
        }

    } else if (classe == 2) {

        console.log("\n1 - Hematofago");
        console.log("\n2 - Onivoro");
        alimentacao = leia.questionInt("\nEscolha: ");

        if (alimentacao == 1){
            console.log("\nSanguessuga");
        } else if (alimentacao == 2) {
            console.log("\nMinhoca");
        }
    }
}