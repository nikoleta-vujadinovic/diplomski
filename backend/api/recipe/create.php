<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Recipe.php";
require_once "../../classes/Category.php";

$database = new Database();
$connection = $database->getConnection();

$recipe = new Recipe($connection);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipe->name = htmlspecialchars(strip_tags($data->name));
    $recipe->image = htmlspecialchars(strip_tags($data->image));
    $recipe->description = htmlspecialchars(strip_tags($data->description));
    $recipe->prepTime = htmlspecialchars(strip_tags($data->prepTime));
    $recipe->cookTime = htmlspecialchars(strip_tags($data->cookTime));

    $stmt1 = $recipe->createRecipe();

    if ($stmt1) {
        http_response_code(200);
        echo json_encode("Recept je kreiran.");
        //$category = new Category($connection);
        //$category->planId = htmlspecialchars(strip_tags($data->planId));
        //$category->id = $connection->lastInsertId();
        //$stmt2 = $category->createCategory();
        //if ($stmt2) {
        //    http_response_code(200);
        //    echo json_encode("Recept je dodat u kategoriju.");
        //} else {
        //    http_response_code(404);
        //    echo json_encode("Recept nije dodat u kategoriju.");
        //}
    } else {
        http_response_code(404);
        echo json_encode("Recept nije kreiran.");
    }
}
