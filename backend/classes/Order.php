<?php

class Order
{
    private $connection;

    public $id;
    public $userId;
    public $userFirstName;
    public $userLastName;
    public $planId;
    public $planName;
    public $planPricePerMeal;
    public $recipes;
    public $numberOfRecipes;
    public $numberOfPeople;
    public $totalPrice;
    public $address;
    public $city;
    public $zipCode;
    public $telephone;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function createOrder()
    {
        $sql = "INSERT INTO Porudzbina (korisnikId, planId, brojRecepata, brojLjudi, adresa, grad, postanskiBroj, telefon) VALUES (:userId, :planId, :numberOfRecipes, :numberOfPeople, :address, :city, :zipCode, :telephone)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":userId", $this->userId);
        $stmt->bindParam(":planId", $this->planId);
        $stmt->bindParam(":numberOfRecipes", $this->numberOfRecipes);
        $stmt->bindParam(":numberOfPeople", $this->numberOfPeople);
        $stmt->bindParam(":address", $this->address);
        $stmt->bindParam(":city", $this->city);
        $stmt->bindParam(":zipCode", $this->zipCode);
        $stmt->bindParam(":telephone", $this->telephone);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function getAllOrders()
    {
        $sql = "SELECT
        po.id, po.korisnikId, k.ime as korisnikIme, k.prezime as korisnikPrezime, po.planId, pl.naziv as planIme, pl.cenaPoObroku as planCenaPoObroku, po.brojRecepata, po.brojLjudi, adresa, grad, postanskiBroj, telefon
        FROM Porudzbina po
        INNER JOIN Korisnik k ON po.korisnikId = k.id
        INNER JOIN Plan pl ON po.planId = pl.id";
        $stmt = $this->connection->query($sql);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function getOrderById()
    {
        $sql = "SELECT
        po.id, po.korisnikId, k.ime as korisnikIme, k.prezime as korisnikPrezime, po.planId, pl.naziv as planIme, pl.cenaPoObroku as planCenaPoObroku, po.brojRecepata, po.brojLjudi, adresa, grad, postanskiBroj, telefon
        FROM Porudzbina po
        INNER JOIN Korisnik k ON po.korisnikId = k.id
        INNER JOIN Plan pl ON po.planId = pl.id
        WHERE po.id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function getOrdersByUser()
    {
        $sql = "SELECT
         po.id, po.planId, pl.naziv as planIme, pl.cenaPoObroku as planCenaPoObroku, po.brojRecepata, po.brojLjudi, adresa, grad, postanskiBroj, telefon
        FROM Porudzbina po
        INNER JOIN Korisnik k ON po.korisnikId = k.id
        INNER JOIN Plan pl ON po.planId = pl.id
        WHERE po.korisnikId = :userId";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":userId", $this->userId);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function deleteOrder()
    {
        $sql = "DELETE FROM Porudzbina WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

}
