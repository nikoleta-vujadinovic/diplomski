<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/User.php";

$database = new Database();
$connection = $database->getConnection();

$user = new User($connection);

if ($_SERVER["REQUEST_METHOD"] == "DELETE" && isset($_GET['id'])) {
    $user->id = htmlspecialchars($_GET['id']);
    $stmt = $user->deleteUser();
    if ($stmt) {
        http_response_code(200);
        echo json_encode("Korisnik je izbrisan.");
    } else {
        http_response_code(404);
        echo json_encode("Korisnik nije izbrisan.");
    }
}
