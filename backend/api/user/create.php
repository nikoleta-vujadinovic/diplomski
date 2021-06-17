<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/User.php";

$database = new Database();
$connection = $database->getConnection();

$user = new User($connection);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user->firstName = htmlspecialchars(strip_tags($data->firstName));
    $user->lastName = htmlspecialchars(strip_tags($data->lastName));
    $user->email = htmlspecialchars(strip_tags($data->email));
    $user->password = htmlspecialchars(strip_tags($data->password));
    $user->role = htmlspecialchars(strip_tags($data->role));

    $stmt = $user->createUser();

    if ($stmt) {
        http_response_code(200);
        echo json_encode("Korisnik je kreiran.");
    } else {
        http_response_code(404);
        echo json_encode("Korisnik nije kreiran.");
    }

}
