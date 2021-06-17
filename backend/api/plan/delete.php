<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Plan.php";

$database = new Database();
$connection = $database->getConnection();

$plan = new Plan($connection);

if ($_SERVER["REQUEST_METHOD"] == "DELETE" && isset($_GET['id'])) {
    $plan->id = htmlspecialchars($_GET['id']);
    $stmt = $plan->deletePlan();
    if ($stmt) {
        http_response_code(200);
        echo json_encode("Plan je izbrisan.");
    } else {
        http_response_code(404);
        echo json_encode("Plan nije izbrisan.");
    }
}
