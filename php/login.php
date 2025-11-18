<?php
require "conexao.php";

$email = $_POST["email"];
$senha = $_POST["senha"];

$sql = $conn->prepare("SELECT id, nome, email, senha FROM usuarios WHERE email=?");
$sql->bind_param("s", $email);
$sql->execute();
$result = $sql->get_result();

if ($result->num_rows == 0) {
    header("Location: ../login.html?erro=1");
    exit;
}

$user = $result->fetch_assoc();

if (!password_verify($senha, $user["senha"])) {
    header("Location: ../login.html?erro=1");
    exit;
}

// criar sessão
session_start();
$_SESSION["usuario"] = $user;

// gerar JSON para guardar no localStorage
echo "
<script>
localStorage.setItem('usuarioLogado', JSON.stringify({
    id: {$user['id']},
    nome: '{$user['nome']}',
    email: '{$user['email']}'
}));
window.location.href = '../index.html';
</script>
";
?>
