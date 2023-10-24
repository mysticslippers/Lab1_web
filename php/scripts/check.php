<?php

declare(strict_types=1);
require_once "validate.php";

$startExecutionTime = microtime(true);
$inputRegExp = "/&?[xyr]-input=/";
$response = array(0, 0, 0, 'Ошибка!', 0);
$responseJson = array(
    "x_input" => 0,
    "y_input" => 0,
    "r_input" => 0,
    "hit" => "Ошибка!",
    "execute_time" => 0);

function checkLeftBottom($xInput, $yInput, $rInput): bool{
    return ($xInput <= 0 and $yInput <= 0) and (abs($xInput) <= $rInput / 2 and abs($xInput) + abs($yInput) <= $rInput);
}

function checkLeftTop($xInput, $yInput, $rInput): bool{
    return ($xInput <= 0 and $yInput >= 0) and (pow($xInput, 2) + pow($yInput, 2) <= pow($rInput / 2, 2));
}

function checkRightTop($xInput, $yInput, $rInput): bool{
    return ($rInput / 2 >= $xInput and $xInput >= 0) and ($rInput >= $yInput and $yInput >= 0);
}

function checkHit($xInput, $yInput, $rInput): string{
    return (checkLeftBottom($xInput, $yInput, $rInput))  || checkLeftTop($xInput, $yInput, $rInput) || checkRightTop($xInput, $yInput, $rInput) ?
        "Попал!" : "Промах!";
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    header("Content-Type: application/json");
    $body = json_decode(file_get_contents("php://input"), true);
    $response[0] = isset($body['x_input']) ? floatval($body['x_input']) : 0;
    $response[1] = isset($body['y_input']) ? floatval($body['y_input']) : 0;
    $response[2] = isset($body['r_input']) ? floatval($body['r_input']) : 0;
    if(validateX($response[0]) and validateY($response[1]) and validateR($response[2])){
        $response[3] = checkHit($response[0], $response[1], $response[2]);
        $response[4] = number_format(microtime(true) - $startExecutionTime, 8, ".", "") * 100000;
    }
    $responseJson["x_input"] = $response[0];
    $responseJson["y_input"] = $response[1];
    $responseJson["r_input"] = $response[2];
    $responseJson["hit"] = $response[3];
    $responseJson["execute_time"] = $response[4];
    echo json_encode($responseJson);
}