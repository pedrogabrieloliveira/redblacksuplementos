<?php
require_once "conexao.php";
require_once "utils.php";

// Aceitar somente requisições POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    resposta(false, "Método inválido.");
}

// Sanitiza os dados recebidos
$nome  = limpar($_POST["nome"] ?? "");
$email = limpar($_POST["email"] ?? "");
$senha = limpar($_POST["senha"] ?? "");

// Verifica campos
if (!campos_obrigatorios($_POST, ["nome", "email", "senha"])) {
    resposta(false, "Preencha todos os campos.");
}

// Verifica se e-mail já existe
$sql = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
$sql->bind_param("s", $email);
$sql->execute();
$sql->store_result();

if ($sql->num_rows > 0) {
    resposta(false, "Este e-mail já está cadastrado.");
}

// Criptografa senha
$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

// Insere usuário
$stmt = $conn->prepare("
    INSERT INTO usuarios (nome, email, senha)
    VALUES (?, ?, ?)
");
$stmt->bind_param("sss", $nome, $email, $senhaHash);

if ($stmt->execute()) {
    resposta(true, "Conta criada com sucesso!");
} else {
    resposta(false, "Erro ao cadastrar usuário.");
}
