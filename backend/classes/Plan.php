<?php

class Plan
{
    private $connection;

    public $id;
    public $name;
    public $description;
    public $pricePerMeal;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function createPlan()
    {
        $sql = "INSERT INTO Plan (naziv, opis, cenaPoObroku) VALUES (:name, :description, :pricePerMeal)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":pricePerMeal", $this->pricePerMeal);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function getAllPlans()
    {
        $sql = "SELECT * FROM Plan";
        $stmt = $this->connection->query($sql);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function getPlanById()
    {
        $sql = "SELECT * FROM Plan WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;

    }

    public function updatePlan()
    {
        $sql = "UPDATE Plan SET naziv = :name, opis = :description, cenaPoObroku = :pricePerMeal WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":pricePerMeal", $this->pricePerMeal);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function deletePlan()
    {
        $sql = "DELETE FROM Plan WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

}
