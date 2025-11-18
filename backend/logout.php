<?php
session_start();

// Remove todos os dados da sessão
session_unset();
session_destroy();

// Redireciona para a página inicial
header("Location: ../index.html");
exit;
