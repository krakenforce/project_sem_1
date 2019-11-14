<?php

include_once realpath(dirname(__FILE__) . '/..') . '/includes/functions.php';
include_once realpath(dirname(__FILE__) . '/..') . '/includes/config.php';

class Database {
    private $dns = DSN;
    private $username = DB_USER;
    private $password = DB_PASSWORD;
    public $pdo;
    private $stmt;

    public function __construct(){
        try{
            $this->pdo = new PDO($this->dns, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $exception){
            self::showMessage($exception->getMessage());
        }
    }
    public function closeConn(){
        $this->pdo = null;
    }
    public function selectData($query){
        try{
            $this->stmt = $this->pdo->prepare($query);
            $this->stmt->execute();
            return $this->stmt;
        }catch (PDOException $e){
            self::showMessage($e->getMessage());
        }
    }
    // gom update, delete, insert (với parameters) thành một function
    public function query_with_params($statement, $param){
        try {
            $statement = trim($statement);
            $this->stmt = $this->pdo->prepare($statement);
            $this->stmt->execute($param);
            if (substr(strtolower($statement), 0, 6) === "select") {
                // trả result-set(rows data) cho lệnh SELECT
                return $this->stmt;
            }else {
                //nếu không phải là lệnh select thì return true(1) hoặc false(0):
                return $result = $this->stmt->rowCount();
            }
        }catch(PDOException $e) {
            die("query failed: " . $e->getMessage());
        }
    }

    public static function showMessage($message){
        echo "<script>alert(\"$message\");</script>";
    }

}

