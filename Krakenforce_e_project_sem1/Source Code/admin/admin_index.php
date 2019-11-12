<?php $title = "index"; include_once 'header.php'; ?>
<?php

// set current page & limit & off-set cho page:
$current_page = isset($_GET['page']) ? $_GET['page'] : 1;
$limit = 8; // -> so luong rows tung trang
if ($current_page == 0 || $current_page == 1) {
    $off_set = 0;
} else {
    $off_set = ($current_page * $limit) - $limit;
}

//tim so luong rows/records cua search vs khong search:
if (isset($_GET['search'])){
    $search_key_word = $_GET['search'];
    $all_products = Product::find_products_by_search($search_key_word);
    $total_record = count($all_products);
}
else{
    $all_products = Product::find_all_products();
    $total_record = count($all_products);
}

//tim` tong so luong trang/pages tu` tong~ so luong rows + limit tung` trang:
$products = array_slice($all_products, $off_set, $limit);
$total_pages = ceil($total_record/$limit);

?>
<script>
    $(document).ready(function(){
        $('#delete-btn').on("click", function () {
            var pro_id = $('#id_of_product').val();
            $.ajax({
                type: "POST",
                url: "delete.php",
                data: {pro_id: pro_id},
                success: function (result) {
                    alert(result);
                    if (result == "success") {
                        window.location.reload();
                    };
                }
            });
        });
        $('.delete_row').on("click", function () {
            if(confirm("are you sure?")){
                var pro_id = $(this).attr('id'),
                    table_row = $(this).closest("tr");
                console.log(pro_id);
                $.ajax({
                    type: "POST",
                    url: "delete.php",
                    data: {pro_id: pro_id},
                    success: function(result) {
                        alert(result);
                        if (result == "success"){
                            table_row.remove();
                        }
                    }
                });
            }

        });
    });
</script>

<body>
<div class="d-flex flex-column navbar navbar-dark navbar-expand-sm">
    <div>

        <div class="d-flex flex-row">
            <div>
                <form action="#" method="get" class="d-flex justify-content-center nav-item" style="width: 300px">
                    <input name="search" class="form-control mr-sm-2" type="search" placeholder="Search Product"
                           aria-label="Search" style="width: 200px">
                    <button name="search-btn" id="search-btn" class="btn btn-outline-success my-2 my-sm-0"
                            type="submit">Search
                    </button>
                </form>
            </div>
            <div>
                <input type="number" class="form-group" id="id_of_product">
                <button id="delete-btn" class="btn btn-primary">Delete by id</button>
            </div>
            <div style="padding-left: 20px">
                <a href="add.php" style="text-decoration: none">
                    <button class="btn btn-primary">Add Product</button>
                </a>
            </div>
        </div>

    </div>
</div>
<div class="container">
    <table border="1" cellspacing="0" align="center" class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Code</th>
            <th scope="col">Product Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Image</th>
            <th scope="col">View More</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <?php foreach ($products
            
            as $product): ?>
        <tr>
            <td scope="row">
                <?php echo $product->product_info['pro_id']; ?>
            </td>
            <td scope="row">
                <?php echo $product->product_info['product_code']; ?>
            </td>
            <td scope="row">
                <?php echo $product->product_info['name']; ?>
            </td>
            <td scope="row">
                <?php echo $product->product_info['brand']; ?>
            </td>
            <td scope="row">
                <img height="100px" width="auto" src="<?php echo $product->product_info['image']; ?>" alt="">
            </td>
            <td scope="row">
                <a href="product_detail.php?pro_id=<?php echo $product->product_info['pro_id']; ?>">
                    <button class="btn btn-success" id="vm-btn">View More</button>
                </a>
            </td>
</div>
</td>
<td scope="row">
    <a href="update.php?pro_id=<?= $product->product_info['pro_id']; ?>">Update</a>
</td>
<td scope="row">
    <button id="<?php echo $product->product_info['pro_id']; ?>" class="btn-warning delete_row">Delete</button>
</td>
</tr>
<?php
    endforeach;
    $db->closeConn();
?>
</table>
<div class="d-flex flex-column">
    <div class="d-flex justify-content-center">
        <ul class="pagination">
        <?php
        if ( (isset($_GET['search'])) ) {
            for ($i = 1; $i <= $total_pages; $i ++){
                if($i == $current_page){
                    echo "<li class=\"page-item\"><a class=\"page-link page_active\" href=\"admin_index.php?search={$_GET['search']}&page={$i}\">{$i}</a></li>";
                }else {
                    echo "<li class=\"page-item\"><a class=\"page-link\" href=\"admin_index.php?search={$_GET['search']}&page={$i}\">{$i}</a></li>";
                }

            };
        } else {

            for ($i = 1; $i <= $total_pages; $i ++){
                if($i == $current_page){
                    echo "<li class=\"page-item\"><a class=\"page-link page_active\" href=\"admin_index.php?page={$i}\">{$i}</a></li>";
                }else {
                    echo "<li class=\"page-item\"><a class=\"page-link\" href=\"admin_index.php?page={$i}\">{$i}</a></li>";
                }

            }
        }
        ?>
        </ul>
    </div>
</div>
</body>
</html>