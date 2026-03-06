import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();

let opcao: number;

do{
    console.log("\n************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("************************************");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(opcao){
        case 1:
            const nome = readlinesync.question("Digite o nome do cliente: ")
            fila.enqueue(nome);
            console.log("Cliente adicionado");
            break;
        case 2:
            console.log("\nLista de clientes na fila: ");
            fila.printQueue();
            break;
        case 3:
            if(fila.isEmpty()){
                console.log("A fila esta vazia!");
            }else{
                const cliente = fila.dequeue();
                console.log(`Cliente ${cliente} foi retirado da fila: `);
            }break;
        case 0:
            console.log("Programa finalizado.");
            break;
        default:
            console.log("Opcao invalida");
    }
}while (opcao !== 0)