<?php
session_start();
require_once "conexao.php";

// SE NÃO ESTIVER LOGADO → VOLTA PARA LOGIN
if (!isset($_SESSION['usuario_id'])) {
    header("Location: ../login.html?erro=login");
    exit;
}

// VERIFICA SE VEIO O CARRINHO
if (!isset($_POST['cart'])) {
    echo "Carrinho não recebido.";
    exit;
}

$cart = json_decode($_POST['cart'], true);

if (!$cart || count($cart) == 0) {
    echo "Carrinho vazio.";
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

// ----------------------------------------------------
// 1) CRIAR O PEDIDO
// ----------------------------------------------------

$sql = "INSERT INTO pedidos (usuario_id, data_compra) VALUES (?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $usuario_id);
$stmt->execute();

$pedido_id = $conn->insert_id; // pega o ID do pedido criado

// ----------------------------------------------------
// 2) SALVAR ITENS DO PEDIDO
// ----------------------------------------------------

$sql_item = "INSERT INTO pedidos_itens (pedido_id, produto_id, quantidade, preco_unitario)
             VALUES (?, ?, ?, ?)";

$stmt_item = $conn->prepare($sql_item);

foreach ($cart as $item) {
    $pid = $item['id'];
    $qtd = $item['qtd'];
    $preco = $item['preco'];

    $stmt_item->bind_param("iiid", $pedido_id, $pid, $qtd, $preco);
    $stmt_item->execute();
}

// ----------------------------------------------------
// 3) LIMPAR CARRINHO DO USUÁRIO
// ----------------------------------------------------

echo "
<script>
    localStorage.removeItem('redblack_cart');
    alert('Compra finalizada com sucesso!');
    window.location.href = '../index.html';
</script>
";

?>
