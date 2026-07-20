<?php
session_start();
echo "<pre>";

print_r($_POST);
$user=$_POST['user'];
$pass=$_POST['pass'];
// $color=$_GET['color'];


echo "<pre>";
// echo "<h1 style='color:$color'> welcome user : $user</h1>";

// if($user == "mohamed" && $pass == 1642001){
//     header("location:indexx.php");
// }else{
//     header("location:login.php");
// }

$users=[
    [
        "username" => "mohamed",
        "password" => "112233"
    ],
    [
        "username" => "haisam",
        "password" => "114477"
    ],
    [
        "username" => "rageh",
        "password" => "115599"
    ],
];
$login=false;
foreach($users as $u){
if($user == $u['username'] && $pass == $u['password']){
    $login=true;
}
}

if($login){
    $_SESSION['if']=$user;
    
    setcookie('user_login', $user ,time()+3600 ,'/'); 

    header("location:index.php");
}else{
    $_SESSION['erorr']="Wrong data";
    header("location:login.php");
}
?>