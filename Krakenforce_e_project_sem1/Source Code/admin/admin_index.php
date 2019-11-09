<?php $title = "admin_index"; include_once "header.php";?>
<h3>admin index page</h3>
<h4>products:</h4>
<?php
$keyword = "mitsubishi";
$products = Product::find_products_by_search($keyword);
foreach ($products as $product){
   var_dump($product->product_info);
    echo "<br>";
};
//  echo " (id: " . $product->product_info['pro_id'] . ")";
?>


<div>
    <form action="delete.php" method="get">
        <input type="number" name="pro_id" style="width: 100px;">
        <button class="btn-primary" type="submit">Delete by id</button>
    </form>
</div>

<div>
    <form action="add.php">
        <button class="btn-primary">Add product</button>
    </form>
</div>

<div>
    <form action="logout.php">
        <button class="btn-primary">Sign out</button>
    </form>
</div>

</body>
</html>