<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/User.php";

$database = new Database();
$connection = $database->getConnection();

$user = new User($connection);

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $user->id = htmlspecialchars(strip_tags($_GET['id']));
    $stmt = $user->getUserById();

    if ($stmt) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);
        $user = array("id" => $id,
            "firstName" => $ime,
            "lastName" => $prezime,
            "email" => $email,
            "password" => $sifra,
            "role" => $uloga);
        http_response_code(200);
        echo json_encode($user);
    } else {
        http_response_code(404);
        echo json_encode("Korisnik nije pronađen.");
    }

} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $stmt = $user->getAllUsers();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $users = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $user = array("id" => $id,
                "firstName" => $ime,
                "lastName" => $prezime,
                "email" => $email,
                "password" => $sifra,
                "role" => $uloga);
            array_push($users, $user);
        }
        http_response_code(200);
        echo json_encode($users);
    } else {
        http_response_code(404);
        echo json_encode("Korisnici nisu pronađeni.");
    }

}
