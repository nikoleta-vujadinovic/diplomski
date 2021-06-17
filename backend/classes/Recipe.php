<?php

class Recipe
{
    private $connection;

    public $id;
    public $name;
    public $image;
    public $description;
    public $prepTime;
    public $cookTime;
    public $planId;
    public $keyword;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function createRecipe()
    {
        $sql = "INSERT INTO Recept (naziv, slika, opis, vremePripreme, vremeKuvanja) VALUES (:name, :image, :description, :prepTime, :cookTime)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":prepTime", $this->prepTime);
        $stmt->bindParam(":cookTime", $this->cookTime);
        if ($stmt->execute()) {
            return true;
        }
        return false;

    }

    public function getAllRecipes()
    {
        $sql = "SELECT * FROM Recept";
        $stmt = $this->connection->query($sql);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function getRecipeById()
    {
        $sql = "SELECT * FROM Recept WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function getRecipesByCategory()
    {
        $sql = "SELECT k.receptId, r.naziv as receptNaziv, r.opis as receptOpis, r.slika as receptSlika, r.vremePripreme as receptVremePripreme, r.vremeKuvanja as receptVremeKuvanja
        FROM Kategorija k
        RIGHT JOIN Recept r ON k.receptId = r.id
        WHERE k.receptId = r.id and k.planId = :planId";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":planId", $this->planId);
        if ($stmt->execute()) {
            return $stmt;
        }

        return false;
    }

    public function getRecipesByName()
    {
        $sql = "SELECT * FROM Recept WHERE naziv LIKE :keyword ";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":keyword", $this->keyword);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function updateRecipe()
    {
        $sql = "UPDATE Recept SET naziv = :name, slika = :image, opis = :description, vremePripreme = :prepTime, vremeKuvanja = :cookTime WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":prepTime", $this->prepTime);
        $stmt->bindParam(":cookTime", $this->cookTime);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function deleteRecipe()
    {
        $sql = "DELETE FROM Recept WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

}
