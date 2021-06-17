<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Order.php";

$database = new Database();
$connection = $database->getConnection();

$order = new Order($connection);

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $order->id = htmlspecialchars(strip_tags($_GET['id']));
    $stmt = $order->getOrderById();

    if ($stmt) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);
        $order = array("id" => $id,
            "userId" => $korisnikId,
            "userFirstName" => $korisnikIme,
            "userLastName" => $korisnikPrezime,
            "planId" => $planId,
            "planName" => $planIme,
            "planPricePerMeal" => $planCenaPoObroku,
            "numberOfRecipes" => $brojRecepata,
            "numberOfPeople" => $brojLjudi,
            "totalPrice" => $planCenaPoObroku * $brojLjudi * $brojRecepata,
            "address" => $adresa,
            "city" => $grad,
            "zipCode" => $postanskiBroj,
            "telephone" => $telefon,
        );
        http_response_code(200);
        echo json_encode($order);
    } else {
        http_response_code(404);
        echo json_encode("Porudžbina nije pronađena.");
    }

} else if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['userId'])) {
    $order->userId = htmlspecialchars(strip_tags($_GET['userId']));
    $stmt = $order->getOrdersByUser();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $orders = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $order = array("id" => $id,
                "planId" => $planId,
                "planName" => $planIme,
                "planPricePerMeal" => $planCenaPoObroku,
                "numberOfRecipes" => $brojRecepata,
                "numberOfPeople" => $brojLjudi,
                "totalPrice" => $planCenaPoObroku * $brojLjudi * $brojRecepata,
                "address" => $adresa,
                "city" => $grad,
                "zipCode" => $postanskiBroj,
                "telephone" => $telefon,
            );
            array_push($orders, $order);
        }
        http_response_code(200);
        echo json_encode($orders);

    } else {
        http_response_code(404);
        echo json_encode("Porudžbine izabranog korisnika nisu pronađene.");
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $stmt = $order->getAllOrders();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $orders = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $order = array("id" => $id,
                "userId" => $korisnikId,
                "userFirstName" => $korisnikIme,
                "userLastName" => $korisnikPrezime,
                "planId" => $planId,
                "planName" => $planIme,
                "planPricePerMeal" => $planCenaPoObroku,
                "numberOfRecipes" => $brojRecepata,
                "numberOfPeople" => $brojLjudi,
                "totalPrice" => $planCenaPoObroku * $brojLjudi * $brojRecepata,
                "address" => $adresa,
                "city" => $grad,
                "zipCode" => $postanskiBroj,
                "telephone" => $telefon,
            );
            array_push($orders, $order);
        }
        http_response_code(200);
        echo json_encode($orders);
    } else {
        http_response_code(404);
        echo json_encode("Porudžbine nisu pronađene.");
    }
}
