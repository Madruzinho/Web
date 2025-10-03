const adicionarItem = () => {
    const lista = document.getElementById("visor");

    const novoItem = document.createElement("a");
    novoItem.innerText = `1`;
    novoItem.classList.add("num");
    lista.append(novoItem);
}