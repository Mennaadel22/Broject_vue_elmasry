<?php
session_start();
if(isset($_SESSION['if']) && isset($_COOKIE['user_login'])){
    $_SESSION['if'] = $_COOKIE['user_login'];
}

if(isset($_SESSION['if'])){
    header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>  Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
    body {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #ffe4e6 0%, #fbcfe8 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        max-width: 380px;
    }

    .login-card {
        background-color: white;
        width: 100%; 
        padding: 50px 40px;
        border-radius: 16px;
        box-shadow: 0 15px 35px rgba(219, 39, 119, 0.1); 
        text-align: center;
        box-sizing: border-box;
    }

    .login-card h2 {
        margin: 0 0 40px 0;
        font-size: 32px;
        color: #475569; 
    }

    .input-group {
        position: relative;
        margin-bottom: 30px;
        text-align: left;
    }

    .input-group label {
        display: block;
        font-size: 13px;
        color: #94a3b8;
        margin-bottom: 5px;
    }

    .input-group i {
        position: absolute;
        left: 5px;
        bottom: 12px;
        color: #cbd5e1;
        font-size: 16px;
    }

    .input-group input {
        width: 100%;
        padding: 10px 10px 10px 30px;
        border: none;
        border-bottom: 2px solid #f1f5f9;
        outline: none;
        font-size: 15px;
        color: #333;
        box-sizing: border-box;
    }

    .input-group input:focus {
        border-bottom-color: #f472b6;
    }

    .btn-login {
        width: 100%;
        padding: 14px;
        border: none;
        border-radius: 30px;
        background: linear-gradient(to right, #f472b6, #ec4899); 
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(236, 72, 153, 0.25);
        transition: transform 0.2s;
        margin-top: 10px;
    }

    .btn-login:hover {
        transform: translateY(-2px);
    }

    .top-alert {
        width: 100%;
        background-color: #fff1f2;
        border: 1px solid #ffe4e6; 
        color: #e11d48;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(219, 39, 119, 0.05);
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>
</head>
<body>

    <div class="main-container">
        
        <?php
        if(isset($_SESSION['erorr'])){
            echo "<div class='top-alert'><i class='fa-solid fa-circle-exclamation'></i> ".$_SESSION['erorr']."</div>";
            unset($_SESSION['erorr']);
        }
        ?>

        <div class="login-card">
            <h2>LOGIN</h2>
            
            <form action="server.php" method="post">
                
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" placeholder=" username" name="user" required>
                    <i class="fa-regular fa-user"></i>
                </div>

                <div class="input-group">
                    <label>Password</label>
                    <input type="password" placeholder=" password" name="pass" required>
                    <i class="fa-solid fa-lock"></i>
                </div>

                <button type="submit" class="btn-login">Login</button>
                
            </form>
        </div>

    </div>

</body>
</html>