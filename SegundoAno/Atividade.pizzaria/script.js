  function mostrarMensagem() {
    const msg = document.getElementById("mensagem");
    msg.style.display = "block";

    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  }