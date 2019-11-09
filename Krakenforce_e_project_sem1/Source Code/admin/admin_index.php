<?php
    require_once("../includes/functions.php");
    require_once("pagination.php");
    $db = new Database();
    if ($_SERVER['REQUEST_METHOD'] === 'POST'):
        $statement = "SELECT * FROM product INNER JOIN product_detail pd ON product.pro_id = pd.pro_id where concat(pd.product_code,name,price,brand,type,model,color) like ?";
        $param = ["%{$_POST['search']}%"];
        $stmt = $db->selectData();
        $total = $stmt->rowCount();
        $config = array(
            'current_page' => isset($_GET['page']) ? $_GET['page'] : 1,
            'total_record' => $total,
            'limit' => 5,
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
            'limit' => 5,
            'link_full' => 'index.php?page={page}',
            'link_first' => 'index.php',
            'range' => 9
        );
        
        $paging = new Pagination();
        $paging->init($config);
        $statement = "SELECT * FROM product " . $paging->get_limit();
        $stmt = $db->selectData($statement);
    endif;
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
    <title>Document</title>
</head>
<body>
<h1 class="text-center" style="color: #0A6BD3">Cosy Aircondition Adminstrator</h1>
<div>
    <a href="admin_index.php" style="text-decoration: none">
        <button class="btn btn-primary">Admin Home Page</button>
    </a>
</div>
<div class="container">
    <form action="#" method="post">
        <input type="search" id="search_input" name="search" placeholder="Search" required>
        <button type="submit" id="searchbtn"><i class="fas fa-search btn btn-primary"></i></button>
    </form>
    <table border="1" cellspacing="0" align="center" class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Code</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">View More</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <?php while ($product = $stmt->fetch(PDO::FETCH_ASSOC)):
            extract($product); ?>
            <tr>
                <td scope="row">
                    <? echo $pro_id ?>
                </td>
                <td scope="row">
                    <? echo $product_code ?>
                </td>
                <td scope="row">
                    <? echo $name ?>
                </td>
                <td scope="row">
                    <? echo $price ?>
                </td>
                <td scope="row">
                    <img height="100px" width="auto" src="photos/<?= $images ?>" alt="">
                </td>
                <td scope="row">
                    <a href="#" id="view-btn">View More</a>
                    <div class="container" style="display: none" id="pop-up-wd">
                        <div class="form-row">
                            <img height="100px" width="auto" src="photos/<?= $images ?>" alt="">
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-1">
                                <label for="pro_id">Product ID</label>
                                <input type="text" name="" id="" value="<?= $row['pro_id'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="pro_code">Product Code</label>
                                <input type="text" name="" id="" value="<?= $row['product_code'] ?>">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="name">Name</label>
                                <input type="text" name="" id="" value="<?= $row['name'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="brand">Brand</label>
                                <input type="text" name="" id="" value="<?= $row['brand'] ?>">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="type">Name</label>
                                <input type="text" name="" id="" value="<?= $row['type'] ?>">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <label for="model">Model</label>
                                <input type="text" name="" id="" value="<?= $row['model'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="color">Color</label>
                                <input type="text" name="" id="" value="<?= $row['color'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="ton">Ton</label>
                                <input type="text" name="" id="" value="<?= $row['ton'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="cooling_cap">Cooling Capacity</label>
                                <input type="text" name="" id="" value="<?= $row['cooling_cap'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="heating_cap">Heating Capacity</label>
                                <input type="text" name="" id="" value="<?= $row['heating_cap'] ?>">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="pw_input">Power Input</label>
                                <input type="text" name="" id="" value="<?= $row['pw_input'] ?>">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <label for="pw_input">Power Input</label>
                                <input type="text" name="" id="" value="<?= $row['pw_input'] ?>">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="fea_01">Feature 1</label>
                                <input type="text" name="" id="" value="<?= $row['fea_01'] ?>">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="fea_02">Feature 2</label>
                                <input type="text" name="" id="" value="<?= $row['fea_02'] ?>">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="fea_03">Feature 3</label>
                                <input type="text" name="" id="" value="<?= $row['fea_03'] ?>">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="download">Detail Information Download File</label>
                                <input type="text" name="" id="" value="<?= $row['download'] ?>">
                            </div>
                        </div>
                    </div>
                    <script>
                        $(document).ready(function ()
                        {
                            $('#pop-up-wd').hide();
                            $('#view-btn').live('click',function (event) {
                                $('#pop-up-wd').toggle('show')
                            });
                        });
                    </script>
                </td>
                <td scope="row">
                    <a href="add.php?pro_id=<?= $pro_id ?>">Update</a>
                </td>
                <td scope="row">
                    <a href="delete.php?pro_id<?= $pro_id ?>">Delete</a>
                </td>
            </tr>
        <?php endwhile;
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