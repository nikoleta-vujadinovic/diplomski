<?php
require_once "../headers.php";
require_once "../../database.php";
require_once "../../classes/Recipe.php";

$database = new Database();
$connection = $database->getConnection();

$recipe = new Recipe($connection);

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $recipe->id = htmlspecialchars(strip_tags($_GET['id']));
    $stmt = $recipe->getRecipeById();

    if ($stmt) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);
        $recipe = array("id" => $id,
            "name" => $naziv,
            "image" => $slika,
            "description" => $opis,
            "prepTime" => $vremePripreme,
            "cookTime" => $vremeKuvanja);
        http_response_code(200);
        echo json_encode($recipe);
    } else {
        http_response_code(404);
        echo json_encode("Recept nije pronađen.");
    }

} else if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['planId'])) {
    $recipe->planId = htmlspecialchars(strip_tags($_GET['planId']));
    $stmt = $recipe->getRecipesByCategory();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $recipes = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $recipe = array("recipeId" => $receptId,
                "name" => $receptNaziv,
                "image" => $receptSlika,
                "description" => $receptOpis,
                "prepTime" => $receptVremePripreme,
                "cookTime" => $receptVremeKuvanja);
            array_push($recipes, $recipe);
        }
        http_response_code(200);
        echo json_encode($recipes);
    } else {
        http_response_code(404);
        echo json_encode("Recepti u izabranoj kategoriji nisu pronađeni.");
    }

} else if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['name'])) {
    $recipe->keyword = $_GET['name'];
    $stmt = $recipe->getRecipesByName();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $recipes = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $recipe = array("id" => $id,
                "name" => $naziv,
                "image" => $slika,
                "description" => $opis,
                "prepTime" => $vremePripreme,
                "cookTime" => $vremeKuvanja);
            array_push($recipes, $recipe);
        }
        http_response_code(200);
        echo json_encode($recipes);
    } else {
        http_response_code(404);
        echo json_encode("Recepti sa ovakvim imenom nisu pronađeni.");
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $stmt = $recipe->getAllRecipes();
    $rowCount = $stmt->rowCount();

    if ($stmt && $rowCount > 0) {
        $recipes = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $recipe = array("id" => $id,
                "name" => $naziv,
                "image" => $slika,
                "description" => $opis,
                "prepTime" => $vremePripreme,
                "cookTime" => $vremeKuvanja);
            array_push($recipes, $recipe);
        }
        http_response_code(200);
        echo json_encode($recipes);
    } else {
        http_response_code(404);
        echo json_encode("Recepti nisu pronađeni.");
    }

}
