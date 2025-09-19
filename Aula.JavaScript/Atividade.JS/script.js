const readline = require("readline-sync");

function calcular(num1, num2, opcao) {
    let resultado = 0;
    if(opcao == 1) {
        resultado = num1 + num2;
    } else if (opcao == 2) {
        resultado = num1 - num2;
    } else if (opcao == 3) {
        resultado = num1 * num2;
    } else if (opcao == 4) {
        resultado = num1 / num2;
    }
    return document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

calcular(5, 10, 3);