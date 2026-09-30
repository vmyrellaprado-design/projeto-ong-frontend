function salvarRascunho() {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");
    const endereco = document.querySelector("#endereco");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    if (
        nome &&
        email &&
        telefone &&
        cep &&
        endereco &&
        cidade &&
        estado
    ) {
        const dadosRascunho = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            cep: cep.value,
            endereco: endereco.value,
            cidade: cidade.value,
            estado: estado.value
        };

        const dadosEmTexto =
            JSON.stringify(dadosRascunho);

        localStorage.setItem(
            "rascunhoCadastroONG",
            dadosEmTexto
        );
    }
}


function carregarRascunho() {
    const dadosSalvos =
        localStorage.getItem(
            "rascunhoCadastroONG"
        );

    if (!dadosSalvos) {
        return;
    }

    try {
        const dadosRascunho =
            JSON.parse(dadosSalvos);

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        const cep = document.querySelector("#cep");
        const endereco = document.querySelector("#endereco");
        const cidade = document.querySelector("#cidade");
        const estado = document.querySelector("#estado");

        if (nome) {
            nome.value = dadosRascunho.nome || "";
        }

        if (email) {
            email.value = dadosRascunho.email || "";
        }

        if (telefone) {
            telefone.value = dadosRascunho.telefone || "";
        }

        if (cep) {
            cep.value = dadosRascunho.cep || "";
        }

        if (endereco) {
            endereco.value = dadosRascunho.endereco || "";
        }

        if (cidade) {
            cidade.value = dadosRascunho.cidade || "";
        }

        if (estado) {
            estado.value = dadosRascunho.estado || "";
        }
    } catch (erro) {
        localStorage.removeItem(
            "rascunhoCadastroONG"
        );
    }
}


function removerRascunho() {
    localStorage.removeItem(
        "rascunhoCadastroONG"
    );
}