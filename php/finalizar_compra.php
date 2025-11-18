<?php
require "conexao.php";
session_start();

if (!isset($_POST["cart"]) || !isset($_POST["id_usuario"])) {
    die("Requisição inválida.");
}

$id_usuario = intval($_POST["id_usuario"]);
$cart = json_decode($_POST["cart"], true);

// calcular total
$total = 0;

foreach ($cart as $item) {
    if (!isset($item["qtd"])) { $item["qtd"] = 1; }
    $total += floatval($item["preco"]) * intval($item["qtd"]);
}

// criar o pedido
$sql = $conn->prepare("INSERT INTO pedidos (id_usuario, total) VALUES (?, ?)");
$sql->bind_param("id", $id_usuario, $total);
$sql->execute();

$id_pedido = $sql->insert_id;

// inserir itens
$sqlItem = $conn->prepare(
    "INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unit)
     VALUES (?, ?, ?, ?)"
);

foreach ($cart as $item) {

    $produto_id = intval($item["id"]);
    $qtd        = intval($item["qtd"]);
    $preco      = floatval($item["preco"]);

    $sqlItem->bind_param("iiid", $id_pedido, $produto_id, $qtd, $preco);
    $sqlItem->execute();
}

// limpar carrinho e redirecionar
echo "
<script>
localStorage.removeItem('redblack_cart');
alert('Pedido realizado! Nº $id_pedido');
window.location.href = '../index.html';
</script>
";
?>
