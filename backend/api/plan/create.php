<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Plan.php";

$database = new Database();
$connection = $database->getConnection();

$plan = new Plan($connection);

$data = json_decode(file_get_contents("php://input"));
//dodati getplanbyId
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $plan->name = htmlspecialchars(strip_tags($data->name));
    $plan->description = htmlspecialchars(strip_tags($data->description));
    $plan->pricePerMeal = htmlspecialchars(strip_tags($data->pricePerMeal));

    $stmt = $plan->createPlan();
    if ($stmt) {
        http_response_code(200);
        echo json_encode("Plan je kreiran.");
    } else {
        http_response_code(404);
        echo json_encode("Plan nije kreiran.");
    }
}
