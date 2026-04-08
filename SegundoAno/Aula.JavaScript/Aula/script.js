const readline = require("readline-sync");

let peso = readline.question('Qual seu peso(kg): ');
let altura = readline.question("Qual a sua altura(m): ")
imc = (peso / (altura**2));
console.log("Seu imc é: " + imc.toFixed(2));

let situacao = " ";

if(imc < 18.5){
    situacao = "Vc esta abaixo do peso";
} else if (imc < 24.9) {
    situacao = "Vc esta normal"
} else if (imc < 29.9) {
    situacao = "Vc esta com sobrepeso"
} else if (imc > 30){
    situacao = "Vc esta com obesidade"
}

console.log(situacao);






function mostrarMensagem() {
    alert("Olá! Você clicou no botão.");
    let none = prompt();
    alert(nome);
}