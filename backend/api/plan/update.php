<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Plan.php";

$database = new Database();
$connection = $database->getConnection();

$plan = new Plan($connection);

$data = json_decode(file_get_contents("php://input"));
if ($_SERVER["REQUEST_METHOD"] == "PUT" && isset($_GET['id'])) {
    $plan->name = htmlspecialchars(strip_tags($data->name));
    $plan->description = htmlspecialchars(strip_tags($data->description));
    $plan->pricePerMeal = htmlspecialchars(strip_tags($data->pricePerMeal));
    $plan->id = htmlspecialchars(strip_tags($_GET['id']));

    $stmt = $plan->updatePlan();

    if ($stmt) {
        http_response_code(200);
        echo json_encode("Plan je ažuriran.");
    } else {
        http_response_code(404);
        echo json_encode("Plan nije ažuriran.");
    }

}
