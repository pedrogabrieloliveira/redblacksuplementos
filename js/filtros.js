document.addEventListener("DOMContentLoaded", () => {

    const inputBusca = document.getElementById("busca");
    const selectCategoria = document.getElementById("categoria");
    const selectOrdenar = document.getElementById("ordenar");

    function aplicarFiltros() {
        let lista = [...produtos];

        // BUSCA
        const texto = inputBusca.value.toLowerCase();
        if (texto.trim() !== "") {
            lista = lista.filter(p =>
                p.nome.toLowerCase().includes(texto)
            );
        }

        // CATEGORIA
        const cat = selectCategoria.value;
        if (cat !== "todos") {
            lista = lista.filter(p => p.categoria === cat);
        }

        // ORDENAR
        switch (selectOrdenar.value) {
            case "menor":
                lista.sort((a, b) => a.preco - b.preco);
                break;
            case "maior":
                lista.sort((a, b) => b.preco - a.preco);
                break;
            case "az":
                lista.sort((a, b) => a.nome.localeCompare(b.nome));
                break;
            case "za":
                lista.sort((a, b) => b.nome.localeCompare(a.nome));
                break;
        }

        renderizarProdutos(lista);
    }

    // eventos
    inputBusca.addEventListener("input", aplicarFiltros);
    selectCategoria.addEventListener("change", aplicarFiltros);
    selectOrdenar.addEventListener("change", aplicarFiltros);

    aplicarFiltros();
});
