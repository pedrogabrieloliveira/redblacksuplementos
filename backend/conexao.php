<?php
// conexao.php
// conexão padrão MySQL para XAMPP
// user: root | senha: "" | db: redblack

$host = "localhost";
$user = "root";
$pass = "";
$db   = "redblack";

$con = new mysqli($host, $user, $pass, $db);

// verifica erro
if ($con->connect_errno) {
    die("Erro ao conectar ao banco: " . $con->connect_error);
}

// força UTF-8
$con->set_charset("utf8mb4");
?>
