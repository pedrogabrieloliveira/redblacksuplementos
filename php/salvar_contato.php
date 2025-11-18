
<?php
require "conexao.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$sql = $conn->prepare("INSERT INTO mensagens_contato (nome, email, mensagem) VALUES (?, ?, ?)");
$sql->bind_param("sss", $nome, $email, $mensagem);

if ($sql->execute()) {
    header("Location: ../contato.html?ok=1");
} else {
    echo "Erro ao enviar mensagem.";
}
?>
