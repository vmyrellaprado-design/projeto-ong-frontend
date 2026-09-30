function gerarProjetos() {
    const listaProjetos =
        document.querySelector("#lista-projetos");

    if (!listaProjetos) {
        return;
    }

    listaProjetos.innerHTML = "";

    projetos.forEach(function (projeto) {
        const card =
            document.createElement("section");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${projeto.titulo}</h2>
            <p>${projeto.descricao}</p>
        `;

        listaProjetos.appendChild(card);
    });
}