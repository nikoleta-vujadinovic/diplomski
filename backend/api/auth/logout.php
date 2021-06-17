<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/User.php";

$database = new Database();
$connection = $database->getConnection();

$user = new User($connection);
//da li je logout post
if ($user->logout()) {
    http_response_code(200);
    echo json_encode("Korisnik je odjavljen.");
} else {
    http_response_code(404);
    echo json_encode("Korisnik nije odjavljen.");
}
