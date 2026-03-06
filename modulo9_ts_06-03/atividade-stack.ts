import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();

let opcao: number;

do{
    console.log("\n************************************");
    console.log("1 - Adicionar Livro na Pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da Pilha");
    console.log("0 - Sair");
    console.log("************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(opcao){
        case 1:
            const livro = readlinesync.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("Livro adicionado!");
            break;
        case 2:
            console.log("\nLista de Livros na Pilha:");
            pilha.printStack();
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia!");
            } else {
                const removido = pilha.pop();
                console.log(`Livro "${removido}" foi retirado da pilha.`);
            }break;
        case 0:
            console.log("Programa finalizado!");
            break;

        default:
            console.log("Opcao invalida!");
    }
}while (opcao !== 0);
