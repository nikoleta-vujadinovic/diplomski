<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Plan.php";

$database = new Database();
$connection = $database->getConnection();

$plan = new Plan($connection);

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $plan->id = htmlspecialchars(strip_tags($_GET['id']));
    $stmt = $plan->getPlanById();

    if ($stmt) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);
        $plan = array("id" => $id,
            "name" => $naziv,
            "description" => $opis,
            "pricePerMeal" => $cenaPoObroku);
        http_response_code(200);
        echo json_encode($plan);
    } else {
        http_response_code(404);
        echo json_encode("Plan nije pronađen.");
    }

} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $stmt = $plan->getAllPlans();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $plans = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $plan = array("id" => $id,
                "name" => $naziv,
                "description" => $opis,
                "pricePerMeal" => $cenaPoObroku);
            array_push($plans, $plan);
        }
        http_response_code(200);
        echo json_encode($plans);
    } else {
        http_response_code(404);
        echo json_encode("Planovi nisu pronađeni.");
    }

}
