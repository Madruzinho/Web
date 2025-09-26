

function calcular(opcao) {
    let resultado = 0;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(opcao == 1) {
        resultado = num1 + num2;
    } else if (opcao == 2) {
        resultado = num1 - num2;
    } else if (opcao == 3) {
        resultado = num1 * num2;
    } else if (opcao == 4) {
        if (num2 == 0) {
            alert("não é possivel divisao por zero")
            document.getElementById("resultado").textContent = "Resultado: erro";
        }
        resultado = num1 / num2;
    }

    return document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
