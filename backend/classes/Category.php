<?php

class Category
{

    private $connection;

    public $id;
    public $planId;
    public $recipeId;
    public $recipeName;
    public $recipeDescription;
    public $recipeImage;
    public $recipePrepTime;
    public $recipeCookTime;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function createCategory()
    {
        $sql = "INSERT INTO Kategorija (planId, receptId) VALUES (:planId, :recipeId)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":planId", $this->planId);
        $stmt->bindParam(":recipeId", $this->recipeId);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

}
