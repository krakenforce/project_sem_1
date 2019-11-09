<?php
    $title = "delete"; include_once "header.php";
    $product_id = $_GET['pro_id'];
    $result = Product::delete_product_by_id($product_id);
    ($result != false) ? header("location: admin_index.php") : Database::showMessage("deletion failed");
?>