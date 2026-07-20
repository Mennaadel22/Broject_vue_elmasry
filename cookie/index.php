<?php
session_start();
if(!isset($_SESSION['if']) && isset($_COOKIE['user_login'])){
    $_SESSION['if'] = $_COOKIE['user_login'];
}

if(!isset($_SESSION['if'])){
    header("location:login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>welcome mohamed</p>
    <a href="logout.php">
        <button>logout</button>
    </a>
</body>
</html>