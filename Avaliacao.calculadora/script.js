// Seleciona o visor
const visor = document.getElementById("visor");

// Seleciona todas as teclas
const teclas = document.querySelectorAll(".tecla");

let expressao = "";

// Percorre todas as teclas e adiciona eventos de clique
teclas.forEach(tecla => {
    tecla.addEventListener("click", () => {
        const id = tecla.id;

        // Botão OFF limpa tudo
        if (id === "off") {
            expressao = "";
            visor.innerText = "";
            return;
        }

        // Raiz quadrada
        if (id === "raiz") {
            if (expressao !== "") {
                const resultado = Math.sqrt(eval(expressao));
                visor.innerText = resultado;
                expressao = resultado.toString();
            }
            return;
        }

        // Porcentagem
        if (id === "porcentagem") {
            expressao += "/100";
            visor.innerText = eval(expressao);
            expressao = visor.innerText;
            return;
        }

        // Igual (=)
        if (id === "igual") {
            try {
                const resultado = eval(expressao);
                visor.innerText = resultado;
                expressao = resultado.toString();
            } catch {
                visor.innerText = "Erro";
                expressao = "";
            }
            return;
        }

        // Operações
        if (id === "somar") expressao += "+";
        else if (id === "subtracao") expressao += "-";
        else if (id === "multiplicacao") expressao += "*";
        else if (id === "divisao") expressao += "/";
        else if (id === "ponto") expressao += ".";
        else if (!isNaN(id)) expressao += id; // números

        // Atualiza visor
        visor.innerText = expressao;
    });
});