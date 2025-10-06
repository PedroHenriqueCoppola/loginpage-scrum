form.addEventListener("submit", (e) => {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    usuario = usuario.replace(/\s+/g, " ").trim(); // correção do bug

    const senha = document.getElementById("senha").value;

    if (!usuario || !senha) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    alert("Login validado!");
});
