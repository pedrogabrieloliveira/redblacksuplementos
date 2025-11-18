<?php
session_start();
require "conexao.php";

$email = $_POST['email'];
$senha = $_POST['senha'];

$stmt = $conn->prepare("SELECT id, nome, email, senha FROM usuarios WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo "<script>alert('Email inválido.'); window.location.href='../login.html';</script>";
    exit;
}

$user = $result->fetch_assoc();

if (!password_verify($senha, $user['senha'])) {
    echo "<script>alert('Senha incorreta.'); window.location.href='../login.html';</script>";
    exit;
}

// salvar session
$_SESSION['usuario_id'] = $user['id'];
$_SESSION['usuario_nome'] = $user['nome'];

// **IMPORTANTE: sem ECHO, sem BOM, sem espaço — imprime HTML limpo**
?>
<!DOCTYPE html>
<html>
<body>
<script>
    const usuario = {
        id: <?= $user['id'] ?>,
        nome: "<?= $user['nome'] ?>",
        email: "<?= $user['email'] ?>"
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    window.location.href = "../index.html";
</script>
</body>
</html>
