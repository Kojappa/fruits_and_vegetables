<?php
    $fio = $_POST['user_name'];
    $email = &_POST['user_email'];
    $phone = $_POST['user_phone'];
    $message = $_POST['user_message'];

    $fio = htmlspecialchars($fio);
    $email = htmlspecialchars($email);
    $phone = htmlspecialchars($phone);
    $message = htmlspecialchars($message);
    
    $fio = urldecode($fio);
    $email = urldecode($email);
    $phone = urldecode($phone);
    $message = urldecode($message);

    $fio = trim($fio);
    $email = trim($email);
    $phone = trim($phone);
    $message = trim($message);

    echo $fio;
    echo "<br>";
    echo $email;
    echo "<br>";  
    echo $phone
    echo "<br>";
    echo $message;
    echo "<br>";
