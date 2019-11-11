<?php
    require_once("../includes/functions.php");
    require_once("../classes/pagination.class.php");
    $db = new Database();
    if ($_SERVER['REQUEST_METHOD'] === 'POST'):
        $statement = "SELECT * FROM product INNER JOIN product_detail pd ON product.pro_id = pd.pro_id where concat(product.product_code,name,price,brand,type,model,color) LIKE ?";
        $param = ["%{$_POST['search']}%"];
        $stmt = $db->query_with_params($statement, $param);
        $total = $stmt->rowCount();
        $config = array(
            'current_page' => isset($_GET['page']) ? $_GET['page'] : 1,
            'total_record' => $total,
            'limit' => 6,
            'link_full' => 'admin_index.php?page={page}',
            'link_first' => 'admin_index.php',
            'range' => 9
        );
        $paging = new Pagination();
        $paging->init($config);
    
    else:
        $statement = "SELECT pro_id FROM product";
        $stmt = $db->selectData($statement);
        $total = $stmt->rowCount();
        $config = array(
            'current_page' => isset($_GET['page']) ? $_GET['page'] : 1,
            'total_record' => $total,
            'limit' => 6,
            'link_full' => 'admin_index.php?page={page}',
            'link_first' => 'admin_index.php',
            'range' => 9
        );
        
        $paging = new Pagination();
        $paging->init($config);
        $statement = "SELECT * FROM product " . $paging->get_limit();
        $stmt = $db->selectData($statement);
    endif;
    $products = Product::find_all_products();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.js"></script>
    <title>Adminstrator</title>
</head>
<body>
<h1 class="text-center" style="color: #0A6BD3">Cosy Aircondition Adminstrator</h1>
<div class="navbar navbar-dark navbar-expand-sm">
    <div>
        <a href="../public/pages/index.php" style="text-decoration: none" class="navbar-brand nav-item">
            <button class="btn btn-info">Cosy AirConditioner Home Page</button>
        </a>
        <a href="admin_index.php" style="text-decoration: none" class="navbar-brand nav-item">
            <button class="btn btn-primary">Admin Home Page</button>
        </a>
        <a href="add.php" style="text-decoration: none" class="navbar-brand nav-item">
            <button class="btn btn-primary">Add Product</button>
        </a>
        <form action="#" method="post" class="form-inline nav-item">
            <input name="search" class="form-control mr-sm-2" type="search" placeholder="Search Product"
                   aria-label="Search">
            <button name="search-btn" id="search-btn" class="btn btn-outline-success my-2 my-sm-0"
                    type="submit">Search
            </button>
        </form>
    </div>
</div>
<div class="container">
    <table border="1" cellspacing="0" align="center" class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Code</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
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
                <?php echo $product->product_info['price']; ?>
            </td>
            <td scope="row">
                <img height="100px" width="auto" src="<?php echo $product->product_info['image']; ?>" alt="">
            </td>
            <td scope="row">
                <a href="product_detail.php?id =<?php echo $product->product_info['pro_id']; ?>">
                    <button class="btn btn-success" id="vm-btn">View More</button>
                </a>
            </td>
</div>
</td>
<td scope="row">
    <a href="add.php?pro_id=<?= $product->product_info['pro_id']; ?>">Update</a>
</td>
<td scope="row">
    <a href="delete.php?pro_id<?= $product->product_info['pro_id']; ?>">Delete</a>
</td>
</tr>
<?php
    endforeach;
    $db->closeConn();
?>
</table>
<?php
    if ($total > 0):
        echo $paging->html();
    else:
        echo "Not found product";
    endif;
    
?>

</div>
</body>
</html>