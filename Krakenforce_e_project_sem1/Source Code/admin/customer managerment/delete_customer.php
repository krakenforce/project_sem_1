<?php

require_once '../../classes/database.class.php';
$db = new Database();
$statement = "DELETE FROM customer where customer_id = ?";
$param = ["{$_POST['customer_id']}"];
$rows_affected = $db->query_with_params($statement,$param);

// Ajax call chỉ nhận value dạng tương tự như echo
if ($rows_affected > 0) {
    echo "success";
} else {
    echo "failure. Id nhập vào có lẽ không tồn tại.";
}