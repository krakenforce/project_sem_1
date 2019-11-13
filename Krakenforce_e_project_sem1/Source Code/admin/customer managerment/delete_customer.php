<?php
    require_once '../../classes/database.class.php';
    $db = new Database();
    $statement = "DELETE FROM customer where customer_id = ?";
    $param = ["{$_POST['customer_id']}"];
    $rows_affected = $db->query_with_params($statement,$param);
    //header("location: customer_manager.php");

