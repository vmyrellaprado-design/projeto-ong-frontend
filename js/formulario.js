function mostrarErro(campo, mensagem) {
    campo.classList.remove("campo-sucesso");
    campo.classList.add("campo-erro");

    const mensagemErro =
        document.querySelector(
            `#erro-${campo.id}`
        );

    if (mensagemErro) {
        mensagemErro.textContent = mensagem;
    }
}


function mostrarSucesso(campo) {
    campo.classList.remove("campo-erro");
    campo.classList.add("campo-sucesso");

    const mensagemErro =
        document.querySelector(
            `#erro-${campo.id}`
        );

    if (mensagemErro) {
        mensagemErro.textContent = "";
    }
}


function validarCampo(campo) {
    const valor = campo.value.trim();

    if (valor === "") {
        mostrarErro(
            campo,
            "Este campo é obrigatório."
        );

        return false;
    }

    if (campo.id === "email") {
        const regexEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(valor)) {
            mostrarErro(
                campo,
                "Digite um e-mail válido."
            );

            return false;
        }
    }

    if (campo.id === "cpf") {
        const regexCpf =
            /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (!regexCpf.test(valor)) {
            mostrarErro(
                campo,
                "Use o formato 000.000.000-00."
            );

            return false;
        }
    }

    if (campo.id === "telefone") {
        const regexTelefone =
            /^\(\d{2}\) \d{5}-\d{4}$/;

        if (!regexTelefone.test(valor)) {
            mostrarErro(
                campo,
                "Use o formato (00) 00000-0000."
            );

            return false;
        }
    }

    if (campo.id === "cep") {
        const regexCep =
            /^\d{5}-\d{3}$/;

        if (!regexCep.test(valor)) {
            mostrarErro(
                campo,
                "Use o formato 00000-000."
            );

            return false;
        }
    }

    mostrarSucesso(campo);

    return true;
}


function configurarFormulario() {
    const formulario =
        document.querySelector(
            "#form-cadastro"
        );

    if (!formulario) {
        return;
    }

    const campos =
        formulario.querySelectorAll("input");

    carregarRascunho();

    campos.forEach(function (campo) {
        campo.addEventListener(
            "input",
            function () {
                validarCampo(campo);
                salvarRascunho();
            }
        );
    });

    formulario.addEventListener(
        "submit",
        function (evento) {
            evento.preventDefault();

            let formularioValido = true;

            campos.forEach(function (campo) {
                if (!validarCampo(campo)) {
                    formularioValido = false;
                }
            });

            if (formularioValido) {
                removerRascunho();

                formulario.reset();

                campos.forEach(function (campo) {
                    campo.classList.remove(
                        "campo-erro",
                        "campo-sucesso"
                    );
                });

                if (typeof Swal !== "undefined") {
                    Swal.fire({
                        icon: "success",
                        title: "Cadastro realizado!",
                        text: "Obrigado por querer fazer parte da nossa ONG.",
                        confirmButtonText: "OK"
                    });
                }
            }
        }
    );
}