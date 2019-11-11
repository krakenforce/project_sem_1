<?php
require_once '../classes/database.class.php';
$db = new Database();
$statement = "DELETE FROM product where pro_id = ?";
$param = ["{$_POST['pro_id']}"];
$rows_affected = $db->query_with_params($statement,$param);
if ($rows_affected > 0){
    echo "success";
}else{
    echo "failure. Id nhập vào có lẽ không tồn tại.";
}
//header("location: admin_index.php");
