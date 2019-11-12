<?php
    require_once ('../includes/functions.php');
    $db= new Database();
    $query = "SELECT * FROM product INNER JOIN product_detail pd on product.pro_id = pd.pro_id";
    $data = $db->selectData($query);
    
    
