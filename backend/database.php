<?php
class Database
{
    private $host = "localhost";
    private $dbname = "diplomski";
    private $username = "root";
    private $password = "";

    public $connection;

    //konekcija sa bazom podataka
    public function getConnection()
    {
        $this->connection = null;
        try {
            $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->dbname, $this->username, $this->password);
            $this->connection->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Neuspešna konekcija sa bazom podataka: " . $exception->getMessage();
        }
        return $this->connection;
    }
}
