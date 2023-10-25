<?php

declare(strict_types=1);

function validateX($xInput): bool{
    $regExp = "/[-+]?\d+[.]?\d{0,15}/";
    return (is_numeric($xInput)) and (preg_match($regExp, strval($xInput))) and ((-2 <= floatval($xInput)) and (floatval($xInput) <= 2));
}

function validateY($yInput): bool{
    $regExp = "/[-+]?\d+[.]?\d{0,15}/";
    return (is_numeric($yInput)) and (preg_match($regExp, strval($yInput))) and ((-5 <= floatval($yInput)) and (floatval($yInput) <= 5));
}

function validateR($rInput): bool{
    $regExp = "/[-+]?\d+[.]?\d{0,15}/";
    return (is_numeric($rInput)) and (preg_match($regExp, strval($rInput))) and ((1 <= floatval($rInput)) and (floatval($rInput) <= 5));
}