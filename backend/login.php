<?php
session_start();
require_once "conexao.php"; // conecta no banco

// VERIFICA SE VEIO POST
if (!isset($_POST['email']) || !isset($_POST['senha'])) {
    header("Location: ../login.html?erro=1");
    exit;
}

$email = trim($_POST['email']);
$senha = trim($_POST['senha']);

// BUSCAR USUÁRIO PELO EMAIL
$sql = "SELECT id, nome, email, senha FROM usuarios WHERE email = ? LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// SE NÃO EXISTE O EMAIL
if ($result->num_rows === 0) {
    header("Location: ../login.html?erro=1");
    exit;
}

$usuario = $result->fetch_assoc();

// VALIDAR SENHA (HASH)
if (!password_verify($senha, $usuario['senha'])) {
    header("Location: ../login.html?erro=1");
    exit;
}

// LOGIN OK → CRIA SESSÃO
$_SESSION['usuario_id'] = $usuario['id'];
$_SESSION['usuario_nome'] = $usuario['nome'];
$_SESSION['usuario_email'] = $usuario['email'];

// REDIRECIONA PARA O INÍCIO
header("Location: ../index.html");
exit;

?>
