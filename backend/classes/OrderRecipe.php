<?php

class OrderRecipe
{
    private $connection;

    public $id;
    public $orderId;
    public $recipeId;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function createOrderedRecipes()
    {
        $sql = "INSERT INTO Porudzbina_recept (porudzbinaId, receptId) VALUES (:orderId, :recipeId)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":orderId", $this->orderId);
        $stmt->bindParam(":recipeId", $this->recipeId);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
