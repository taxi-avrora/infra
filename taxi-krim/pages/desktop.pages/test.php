<?php

header('Access-Control-Allow-Origin: *');

$data = $_POST;
$from = isset($data['from'])? $data['from'] : '';
$to = isset($data['to'])? $data['to'] : '';
$type = isset($data['type'])? (int) $data['type'] : 1;
$typeText = $type === 1 ? 'В течении 20 минут' : 'Предварительный';
$time = isset($data['time'])? $data['time'] : '';
$back = isset($data['back'])? $data['back'] : false;
$backdate = isset($data['backdate'])? $data['backdate'] : '';
$class = isset($data['class'])? $data['class'] : '';
$commentary = isset($data['commentary'])? $data['commentary'] : '';
$price = isset($data['price'])? preg_replace('/\D/', '', $data['price']) : '';
$phone = isset($data['phone'])? $data['phone'] : '';
$classes = ['', 'Стандарт', 'Комфорт', 'Бизнес', 'Минивэн'];

$email = 'taxikrim777@gmail.com';
//$email = 'yury.kundin@yandex.ru';

$subject = "Новый заказ такси!";

$message = "
    <h2>Новый заказ!</h2>
    <b>Откуда: </b>$from<br>
    <b>Куда: </b>$to<br>
    <b>Тип заказа: </b>$typeText</br>
    <b>Дата поездки: </b>" . $time['date'] . ' в ' . $time['time'] . "</br>";

    if ($back) $message .= "
        <b>Обратный трансфер: </b>Да<br>
        <b>Дата обратной поздки: </b>" . $backdate['date'] . ' в ' . $backdate['time'] . "<br>";

    $message .= "
    <b>Класс машины: </b>" . $classes[$class] . "<br>
    <b>Комментарий к заказу: </b>$commentary<br>
    <b>Стоимость: </b>$price<br>";

    if ($back) $message .= "
        <b>Скидка: </b>5%<br>
        <b>Стоимость с учетом скидки: </b>" . ($price*0.95) . "<br>";

    $message .= "<b>Телефон: </b>$phone<br>";

$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <noreply@taxi-avrora-krim.ru>\r\n";

mail($email, $subject, $message, $headers);
?>
