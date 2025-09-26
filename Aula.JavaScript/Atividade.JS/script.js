

function calcular(opcao) {
    let resultado = 0;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(opcao == 1) {
        resultado = num1 + num2;
        document.body.style.backgroundColor = "lightgreen";
    } else if (opcao == 2) {
        resultado = num1 - num2;
        document.body.style.backgroundColor = "lightblue";
    } else if (opcao == 3) {
        resultado = num1 * num2;
        document.body.style.backgroundColor = "orange";
    } else if (opcao == 4) {
        if (num2 == 0) {
            document.body.style.backgroundColor = "red";
            alert("não é possivel divisao por zero")
            return document.getElementById("resultado").textContent = "Resultado: erro";
        } else {
        resultado = num1 / num2;
        document.body.style.backgroundColor = "purple";
        }
    }

    return document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
