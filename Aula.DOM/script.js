function mudarTitulo() {
    const titulo = document.getElementById("titulo-principal");
    titulo.innerHTML = "DOM alterado com <em>sucesso</em>!";

    let parag = document.querySelector(".conteudo p");
    parag.innerHTML = "Alterado com JS";
}

const mudarEstilo = function() {
    const item = document.getElementById("item-especial");
    item.style.backgroundColor = "#39755aff";
    item.style.color = "white";
}

const adicionarItem = () => {
    const lista = document.getElementById("lista-de-itens");
    let qtd = lista.getElementsByTagName("li").length;

    const novoItem = document.createElement("li");
    novoItem.innerText = `item ${qtd + 1} - via JS`;
    novoItem.classList.add("item-lista");
    lista.append(novoItem);
}

const criarElement = () => {
    const div = document.getElementById('novo-container');
    div.innerHTML="Ola";

    const texto = document.createElement('h2');
    texto.innerText = "Div criada com JS";

    div.appendChild(texto);
}