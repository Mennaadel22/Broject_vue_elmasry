<?php
session_start();

// echo "<pre>";
// print_r($_POST);
$user=$_POST['user'];
$pass=$_POST['pass'];
// echo "<pre>";


$admin=[
    [
        "username" => "adel",
        "password" => "123",
    ],
    [
        "username" => "mohammed",
        "password" => "456",
    ],
    [
        "username" => "mira",
        "password" => "789",
    ],
    [
        "username" => "menna",
        "password" => "147",
    ],
];

$login=false;

foreach($admin as $u){
    if($user == $u['username'] && $pass == $u['password']){
    $login=true;
}
}
if($login){
    $_SESSION['user']=$user;
    header("location:index.php");
    exit();
}else{
    $_SESSION['erorr']="wrong data";
    header("location:login.php");
}

?>