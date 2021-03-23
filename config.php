<?php
$host = 'localhost';
$user = 'foxuser_db';
$pass = '02320';
$db_name = 'foxnt_db';
$link = mysqli_connect($host, $user, $pass, $db_name);

if (!$link) {
    echo 'Ошибка соеденения с базой данных. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
}
?>