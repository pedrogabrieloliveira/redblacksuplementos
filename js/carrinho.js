const CART_KEY = "redblack_cart";

// =============================
// PEGAR E SALVAR CARRINHO
// =============================
function pegarCarrinho() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch(e) {
        return [];
    }
}

function salvarCarrinho(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// =============================
// ADICIONAR AO CARRINHO
// =============================
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === Number(id));
    if (!produto) return;

    const cart = pegarCarrinho();
    const item = cart.find(i => i.id === produto.id);

    if (item) {
        item.quantidade += 1;
    } else {
        cart.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            img: produto.img,
            quantidade: 1
        });
    }

    salvarCarrinho(cart);

    toast("Adicionado ao carrinho");

    setTimeout(() => {
        window.location.href = "carrinho.html";
    }, 400);
}

// =============================
// REMOVER ITEM
// =============================
function removerDoCarrinho(id) {
    let cart = pegarCarrinho();
    cart = cart.filter(i => i.id !== Number(id));
    salvarCarrinho(cart);
    renderizarCarrinho();
}

// =============================
// RENDERIZAR CARRINHO
// =============================
function renderizarCarrinho() {
    const lista = document.getElementById("carrinhoLista");
    const subtotalEl = document.getElementById("subtotal");
    const freteEl = document.getElementById("frete");
    const totalEl = document.getElementById("total");

    if (!lista) return;

    const cart = pegarCarrinho();
    lista.innerHTML = "";

    if (cart.length === 0) {
        lista.innerHTML = `
        <div class="carrinho-vazio">
             <p>Seu carrinho está vazio.</p>
             <a href="produtos.html" class="btn-ver-produtos">Ver Produtos</a>
        </div>
        `;
        subtotalEl.textContent = "R$ 0,00";
        freteEl.textContent = "R$ 0,00";
        totalEl.textContent = "R$ 0,00";
        return;
    }

    cart.forEach(item => {
        const el = document.createElement("div");
        el.className = "carrinho-item";

        el.innerHTML = `
            <img src="${item.img}" alt="${escapeHtml(item.nome)}" />
            <div class="carrinho-info">
                <h3>${escapeHtml(item.nome)}</h3>
                <div>Qtd: ${item.quantidade}</div>
                <div class="preco-item">R$ ${(item.preco * item.quantidade).toFixed(2)}</div>
            </div>
            <button class="remove-btn" data-id="${item.id}">
                Remover
            </button>
        `;

        el.querySelector(".remove-btn").addEventListener("click", () => removerDoCarrinho(item.id));

        lista.appendChild(el);
    });

    const subtotal = cart.reduce((s, i) => s + i.preco * i.quantidade, 0);
    const frete = 0;
    const total = subtotal + frete;

    subtotalEl.textContent = `R$ ${subtotal.toFixed(2)}`;
    freteEl.textContent = `R$ ${frete.toFixed(2)}`;
    totalEl.textContent = `R$ ${total.toFixed(2)}`;
}

// =============================
// TOAST MENSAGEM
// =============================
function toast(msg) {
    const t = document.createElement("div");
    t.textContent = msg;
    Object.assign(t.style, {
        position: "fixed",
        right: "18px",
        bottom: "18px",
        background: "#111",
        color: "#fff",
        padding: "10px 14px",
        border: "1px solid #222",
        borderRadius: "8px",
        zIndex: 9999,
        boxShadow: "0 6px 20px rgba(0,0,0,0.4)"
    });
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1600);
}

// =============================
// ESCAPAR HTML
// =============================
function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m =>
        ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[m])
    );
}

// =============================
// POPUP FINALIZAÇÃO (LOCAL)
// =============================
document.getElementById("btnFinalizar")?.addEventListener("click", () => {
    const cart = pegarCarrinho();

    if (cart.length === 0) {
        toast("⚠ Seu carrinho está vazio!");
        return;
    }

    // Popup local (não usado mais com PHP)
    const msg = document.createElement("div");
    msg.className = "compra-popup";
    msg.innerHTML = `
        <div class="compra-caixa">
            <h2>Compra Finalizada</h2>
            <p>Obrigado por comprar na <strong>RedBlack</strong>!</p>
            <button id="fecharPopup">Fechar</button>
        </div>
    `;

    document.body.appendChild(msg);

    salvarCarrinho([]);

    document.getElementById("fecharPopup").addEventListener("click", () => {
        msg.remove();
        renderizarCarrinho();
    });
});

// =============================
// EXECUTAR AO CARREGAR
// =============================
document.addEventListener("DOMContentLoaded", renderizarCarrinho);
