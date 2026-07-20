<?php
session_start();
session_unset();
session_destroy();
if(isset($_COOKIE['user_login'])){
    setcookie("uset_login",'' ,time() -3600 ,'/');
}
header("location:login.php");
?>