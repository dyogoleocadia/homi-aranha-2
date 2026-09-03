const botao = document.getElementById("temaBtn");

botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.textContent = "☀️ Modo claro";
    } else {
        botao.textContent = "🌙 Modo escuro";
    }
});
