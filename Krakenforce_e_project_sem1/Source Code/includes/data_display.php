<?php
include_once 'functions.php';
$id = $_GET['product_id'];
$product = Product::find_product_by_id($id);
echo json_encode($product);