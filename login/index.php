<?php
session_start();
print_r($_SESSION);

if(!isset($_SESSION['user'])){
    header("location:login.php");}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>


        button{
            width: 20%;
        padding: 14px;
        border: none;
        border-radius: 30px;
        background: linear-gradient(to right,rgb(69, 121, 155),rgb(44, 113, 153)); 
        color: white;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px; 
        display: block;
        }
    </style>
</head>
<body>
    
    <a href="logout.php">
        <button>logout</button>
    </a>
</body>
</html>