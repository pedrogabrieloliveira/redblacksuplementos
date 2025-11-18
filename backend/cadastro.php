<?php
require "conexao.php";
session_start();

if (!isset($_POST["nome"]) || !isset($_POST["email"]) || !isset($_POST["senha"])) {
    die("Requisição inválida!");
}

$nome  = trim($_POST["nome"]);
$email = trim($_POST["email"]);
$senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);

// verifica se email já existe
$sql = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
$sql->bind_param("s", $email);
$sql->execute();
$sql->store_result();

if ($sql->num_rows > 0) {
    header("Location: ../cadastro.html?erro=email");
    exit;
}

// cadastra o usuário
$sql = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
$sql->bind_param("sss", $nome, $email, $senha);
$sql->execute();

header("Location: ../login.html?sucesso=1");
exit;
?>
