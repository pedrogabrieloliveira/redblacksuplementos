<?php
require "conexao.php";

$nome  = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Verifica se o e-mail já existe
$check = $conn->prepare("SELECT id FROM usuarios WHERE email=?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    header("Location: ../cadastro.html?erro=email");
    exit;
}

$hash = password_hash($senha, PASSWORD_DEFAULT);

$sql = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
$sql->bind_param("sss", $nome, $email, $hash);

if ($sql->execute()) {
    header("Location: ../cadastro.html?sucesso=1");
} else {
    echo "Erro ao cadastrar.";
}
?>
