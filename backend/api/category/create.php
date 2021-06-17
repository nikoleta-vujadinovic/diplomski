<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Category.php";
$database = new Database();
$connection = $database->getConnection();

$category = new Category($connection);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $category->planId = htmlspecialchars(strip_tags($data->planId));
    $category->recipeId = htmlspecialchars(strip_tags($data->recipeId));

    $stmt = $category->createCategory();

    if ($stmt) {
        http_response_code(200);
        echo json_encode("Kategorija je kreirana.");
    } else {
        http_response_code(404);
        echo json_encode("Kategorija nije kreirana.");
    }
}
