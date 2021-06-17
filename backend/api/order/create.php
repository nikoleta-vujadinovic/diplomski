<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Order.php";
require_once "../../classes/OrderRecipe.php";

$database = new Database();
$connection = $database->getConnection();

$order = new Order($connection);
$orderedRecipes = new OrderRecipe($connection);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $order->userId = htmlspecialchars(strip_tags($data->userId));
    $order->planId = htmlspecialchars(strip_tags($data->planId));
    $order->numberOfRecipes = htmlspecialchars(strip_tags($data->numberOfRecipes));
    $order->numberOfPeople = htmlspecialchars(strip_tags($data->numberOfPeople));
    $order->address = htmlspecialchars(strip_tags($data->address));
    $order->city = htmlspecialchars(strip_tags($data->city));
    $order->zipCode = htmlspecialchars(strip_tags($data->zipCode));
    $order->telephone = htmlspecialchars(strip_tags($data->telephone));
    $stmt1 = $order->createOrder();

    $orderedRecipes->orderId = $connection->lastInsertId();
    foreach ($data->recipes as $recipeId) {
        $orderedRecipes->recipeId = $recipeId;
        $stmt2 = $orderedRecipes->createOrderedRecipes();
    }

    if ($stmt1 && $stmt2) {
        http_response_code(200);
        echo json_encode("Porudžbina je kreirana.");
    } else {
        http_response_code(404);
        echo json_encode("Porudžbina nije kreirana.");
    }
}
