<?php

class User
{

    private $connection;

    public $id;
    public $firstName;
    public $lastName;
    public $email;
    public $password;
    public $role;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function createUser()
    {
        $sql = "INSERT INTO Korisnik (ime, prezime, email, sifra, uloga) VALUES (:firstName, :lastName, :email, :password, :role)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":firstName", $this->firstName);
        $stmt->bindParam(":lastName", $this->lastName);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":role", $this->role);
        if ($stmt->execute()) {
            return true;
        }
        return false;

    }

    public function getAllUsers()
    {
        $sql = "SELECT * FROM Korisnik";
        $stmt = $this->connection->query($sql);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function getUserById()
    {
        $sql = "SELECT * FROM Korisnik WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;
    }

    public function updateUser()
    {
        $sql = "UPDATE Korisnik SET ime = :firstName, prezime = :lastName, email = :email, sifra = :password, uloga = :role WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":firstName", $this->firstName);
        $stmt->bindParam(":lastName", $this->lastName);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":role", $this->role);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;

    }

    public function deleteUser()
    {
        $sql = "DELETE FROM Korisnik WHERE id = :id";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":id", $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;

    }

    public function login()
    {
        $sql = "SELECT * FROM Korisnik WHERE email = :email and sifra = :password";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);
        if ($stmt->execute()) {
            return $stmt;
        }
        return false;

    }

    public function logout()
    {
        if (session_destroy()) {
            return true;
        }
        return false;

    }

}
