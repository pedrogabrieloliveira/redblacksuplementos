<?php
// utils.php
// Funções auxiliares para todo o backend

// -------------------------------------------------
// SANITIZAR STRING
// -------------------------------------------------
function limpar($str) {
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

// -------------------------------------------------
// ENVIAR RESPOSTA JSON
// -------------------------------------------------
function resposta($ok, $msg, $extra = []) {
    echo json_encode(array_merge([
        "ok" => $ok,
        "msg" => $msg
    ], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}

// -------------------------------------------------
// VERIFICAR SE CAMPOS ESTÃO PREENCHIDOS
// -------------------------------------------------
function campos_obrigatorios($dados, $campos) {
    foreach ($campos as $c) {
        if (!isset($dados[$c]) || trim($dados[$c]) === "") {
            return false;
        }
    }
    return true;
}

// -------------------------------------------------
// INICIAR SESSÃO SEGURA
// -------------------------------------------------
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// -------------------------------------------------
// SALVAR USUÁRIO NA SESSÃO (LOGIN)
// -------------------------------------------------
function logarUsuario($id, $nome, $email) {
    $_SESSION['usuario'] = [
        "id" => $id,
        "nome" => $nome,
        "email" => $email
    ];
}

// -------------------------------------------------
// VERIFICAR LOGIN
// -------------------------------------------------
function usuarioLogado() {
    return isset($_SESSION['usuario']);
}

// -------------------------------------------------
// PEGAR DADOS DO USUÁRIO
// -------------------------------------------------
function getUsuario() {
    return $_SESSION['usuario'] ?? null;
}

?>
