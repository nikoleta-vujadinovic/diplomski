<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/User.php";

$database = new Database();
$connection = $database->getConnection();

if ($_SESSION['user']) {
    http_response_code(200);
    echo json_encode($_SESSION['user']);
} else {
    http_response_code(404);
    echo json_encode("Sesija je trenutno prazna.");
}
