<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/User.php";

$database = new Database();
$connection = $database->getConnection();

$user = new User($connection);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user->email = htmlspecialchars(strip_tags($data->email));
    $user->password = htmlspecialchars(strip_tags($data->password));

    $stmt = $user->login();

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
        $_SESSION['authorized'] = true;
        $_SESSION['user'] = $user;
        echo json_encode("Korisnik je uspešno prijavljen.");
    } else {
        http_response_code(404);
        echo json_encode("Korisnik neuspešno prijavljen.");
    }

}
