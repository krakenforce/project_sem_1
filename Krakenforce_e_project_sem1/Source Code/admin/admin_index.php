<?php $title = "admin_index"; include_once "header.php";?>
<h3>admin index page</h3>
<h4>products:</h4>
<?php
$products = Product::find_all_products();
foreach ($products as $product){
    echo $product->product_info['name'];
    echo "<br>";
};

?>
<div>
    <form action="logout.php">
        <button class="btn-primary">Sign out</button>
    </form>
</div>
</body>
</html>