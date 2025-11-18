<?php
require "conexao.php"; // conecta no banco
session_start();

// Se o formulário não enviou nada
if (!isset($_POST["nome"]) || !isset($_POST["email"]) || !isset($_POST["mensagem"])) {
    die("Requisição inválida!");
}

$nome = trim($_POST["nome"]);
$email = trim($_POST["email"]);
$mensagem = trim($_POST["mensagem"]);

// Prepara e insere no banco
$sql = $conn->prepare("INSERT INTO contato (nome, email, mensagem) VALUES (?, ?, ?)");
$sql->bind_param("sss", $nome, $email, $mensagem);
$sql->execute();

// Redireciona com feedback
header("Location: ../contato.html?sucesso=1");
exit;
?>
