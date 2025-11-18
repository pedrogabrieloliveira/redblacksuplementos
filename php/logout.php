
<?php
session_start();
session_destroy();
header("Location: ../login.html?logout=1");
exit;
?>
