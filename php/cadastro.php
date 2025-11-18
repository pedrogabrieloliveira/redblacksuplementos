<?php
require "conexao.php";

$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);

// Verificar se email já existe
$sqlCheck = $conn->prepare("SELECT id FROM usuarios WHERE email=?");
$sqlCheck->bind_param("s", $email);
$sqlCheck->execute();
$sqlCheck->store_result();

if ($sqlCheck->num_rows > 0) {
    header("Location: ../cadastro.html?erro=email");
    exit;
}

// Inserir usuário
$sql = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
$sql->bind_param("sss", $nome, $email, $senha);

if ($sql->execute()) {
    header("Location: ../cadastro.html?sucesso=1");
} else {
    echo "Erro ao cadastrar.";
}
?>
