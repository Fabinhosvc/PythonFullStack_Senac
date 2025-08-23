const prompt = require("prompt-sync")();

function mostrarMenu() {
    console.log("--- Kalel: Seu Assistente Virtual ---");
    console.log("[1] Que horas são?");
    console.log("[2] Conte uma curiosidade");
    console.log("[3] Me diga seu nome");
    console.log("[4] Sair");
    console.log("---------------------------------------");
}

function mostrarHora(){
     console.log("Pelos dados de Brasília, agora são 19:30 do dia 22/08/2025");
}

function contarCuriosidade(){
    console.log("Uma curiosidade interessante sobre Python é que seu nome não se refere ao réptil, mas sim ao grupo de comédia britânico Monty Python.");
}

function apresentarAssistente(nomeAssistente){
    console.log(`Eu sou ${nomeAssistente}, seu assistente virtual`);
}

let usuario = prompt("Qual seu nome? ");
console.log (`Satisfação ${usuario}, no que posso lhe ajudar? Sou` );

let continuar = true;

while (continuar = true){
    mostrarMenu();

    let opcao = prompt("Digite a opção de sua escolha:");
 
    if (opcao === "1") {
        mostrarHora()
    } else if (opcao === "2"){
        contarCuriosidade()
    } else if (opcao === "3"){
        apresentarAssistente("Kalel");
    } else if (opcao === "4"){
        process.exit();
    } else  (continuar === true)
        prompt("\nPresione enter para continuar")

}    
