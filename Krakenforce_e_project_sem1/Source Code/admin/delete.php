<?php
    require_once ("../classes/database.class.php");
    $db = new Database();
    $statement = "DELETE FROM product where pro_id = ?";
    $param = ["{$_GET['pro_id']}"];
    $stmt = $db->query_with_params($statement,$param);
    header("location: admin_index.php");
?>