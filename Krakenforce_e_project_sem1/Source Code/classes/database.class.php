<?php

class ShowPhp {
    static function showMessage($message){
        echo "<script>alert(\"$message\");</script>";
    }
}

class Database {
    private $dns = "mysql:host=localhost; dbname=ac_sell; charset=utf8";
    private $username = "krakenforce";
    private $password = "123456";
    private $pdo;
    private $stmt;
    public function __construct(){
        try{
            $this->pdo = new PDO($this->dns, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $exception){
            ShowPhp::showMessage($exception->getMessage());
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
            ShowPhp::showMessage($e->getMessage());
        }
    }

    // gom update, delete, insert (với parameters) thành một function
    public function query_with_params($statement, $param){
        try {
            $statement = trim($statement);
            $this->stmt = $this->pdo->prepare($statement);
            $result = $this->stmt->execute($param);
            if (substr(strtolower($statement), 0, 6) === "select") {
                // trả result-set(rows data) cho lệnh SELECT
                return $this->stmt;
            }else {
                //nếu không phải là lệnh select thì return true(1) hoặc false(0):
                return $result;
            }
        }catch(PDOException $e) {
           // ShowPhp::showMessage($exception->getMessage());
            echo "query failed: " . $e->getMessage();
        }
    }

}

