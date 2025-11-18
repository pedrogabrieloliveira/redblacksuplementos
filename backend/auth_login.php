<?php
require_once "conexao.php";
require_once "utils.php";

// Aceita apenas método POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    resposta(false, "Método inválido.");
}

$email = limpar($_POST["email"] ?? "");
$senha = limpar($_POST["senha"] ?? "");

// Checa campos obrigatórios
if (!campos_obrigatorios($_POST, ["email", "senha"])) {
    resposta(false, "Preencha todos os campos.");
}

// Busca usuário
$stmt = $conn->prepare("SELECT id, nome, senha FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    resposta(false, "Email não encontrado.");
}

$stmt->bind_result($id, $nome, $senhaHash);
$stmt->fetch();

// Verifica a senha criptografada
if (!password_verify($senha, $senhaHash)) {
    resposta(false, "Senha incorreta.");
}

// LOGIN ACEITO → cria sessão real
session_start();
$_SESSION["usuario"] = [
    "id" => $id,
    "nome" => $nome,
    "email" => $email
];

resposta(true, "Login realizado com sucesso!");
