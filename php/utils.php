<?php
function proteger() {
    if (!isset($_SESSION['usuario_id'])) {
        header("Location: login.html?erro=login");
        exit;
    }
}
?>
