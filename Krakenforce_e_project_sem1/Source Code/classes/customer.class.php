<?php
    
    class ShowPhp
    {
        static function showMessage($message)
        {
            echo "<script>alert(\"$message\");</script>";
        }
    }
    
    class Customer_Database
    {
        private $dns = "mysql:host=localhost; dbname=ac_sell; charset=utf8";
        private $username = "krakenforce";
        private $password = "123456";
        private $pdo;
        private $stmt;
    
        public function __construct()
        {
            try
            {
                $this->pdo = new PDO($this->dns, $this->username, $this->password);
            } catch (Exception $e)
            {
                ShowPhp::showMessage($e->getMessage());
            }
        }
    
        public function closeConn()
        {
            $this->pdo = null;
        }
    
        public function selectData($query)
        {
            try
            {
                $this->stmt = $this->pdo->prepare($query);
                $this->stmt->execute();
                return $this->stmt;
            } catch (Exception $e)
            {
                ShowPhp::showMessage($e->getMessage());
            }
        }
    
        public function selectDataParam($query, $param)
        {
            try
            {
                $this->stmt = $this->pdo->prepare($query);
                $this->stmt->execute($param);
                return $this->stmt;
            } catch (Exception $e)
            {
                ShowPhp::showMessage($e->getMessage());
            }
        }
    
        public function updateParam($statement, $param)
        {
            try
            {
                $this->stmt = $this->pdo->prepare($statement);
                $this->stmt->execute($param);
                return true;
            } catch (Exception $e)
            {
                ShowPhp::showMessage($e->getMessage());
            }
        }
    }