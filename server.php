<?php

include_once 'config.php';

 if (isset($_POST["name"])) {
    $sql = mysqli_query($link, "INSERT INTO `feedback` (`name`, `email`, `message`) VALUES ('{$_POST['name']}', '{$_POST['email']}', '{$_POST['message']}')");
    if ($sql) {
      echo '<p>Данные успешно добавлены в таблицу.</p>';
    } else {
      echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
    }
  }

?>