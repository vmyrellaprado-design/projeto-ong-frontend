document.addEventListener(
    "DOMContentLoaded",
    function () {

        const links =
            document.querySelectorAll(
                "[data-rota]"
            );

        const conteudo =
            document.querySelector(
                "#conteudo"
            );


        function navegar(rota) {
            const template =
                document.getElementById(rota);

            if (template && conteudo) {
                conteudo.innerHTML =
                    template.innerHTML;

                window.location.hash = rota;

                if (rota === "projetos") {
                    gerarProjetos();
                }

                if (rota === "cadastro") {
                    configurarFormulario();
                }
            }
        }


        links.forEach(function (link) {
            link.addEventListener(
                "click",
                function (evento) {
                    evento.preventDefault();

                    const rota =
                        link.getAttribute(
                            "data-rota"
                        );

                    navegar(rota);
                }
            );
        });


        const botaoMenu =
            document.querySelector(
                ".menu-toggle"
            );

        const menu =
            document.querySelector(
                ".menu"
            );


        if (botaoMenu && menu) {
            botaoMenu.addEventListener(
                "click",
                function () {
                    menu.classList.toggle(
                        "menu-aberto"
                    );
                }
            );
        }


        const rotaInicial =
            window.location.hash.replace(
                "#",
                ""
            ) || "inicio";


        navegar(rotaInicial);
    }
);