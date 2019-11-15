<?php $title = "Product Details";
    include_once 'header.php'; ?>
<?php
    $db = new Database();
    $pro_id = $_GET['pro_id'];
    $product = Product::find_product_by_id($pro_id);
    //$products = Product::find_all_products();
?>
<!-- navbar -->
<nav class="navbar navbar-expand-md navbar-light">
    <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
        <div class="container-fluid">
            <div class="row">
                <!-- sidebar -->
                <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                    <a href="admin_index.php"
                       class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Cosy
                        Air Conditioner</a>
                    <div class="bottom-border pb-3">
                        <img src="images/krakenforce%20logo.jpg" width="50" class="rounded-circle mr-3">
                        <a href="#" class="text-white">Kraken Force</a>
                    </div>
                    <ul class="navbar-nav flex-column mt-4">
                        <li class="nav-item"><a href="admin_index.php"
                                                class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-user text-light fa-lg mr-3"></i>Customer</a></li>
                        <li class="nav-item"><a href="product.php" class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Product</a></li>
                        <li class="nav-item"><a href="../public/pages/index.php"
                                                class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-snowflake text-light fa-lg mr-3"></i>Cosy Homepage</a></li>
                    </ul>
                </div>
                <!-- end of sidebar -->

                <!-- top-nav -->
                <div class="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <h4 class="text-light text-uppercase mb-0">View More Information</h4>
                        </div>
                        <div class="col-md-5">
                        </div>
                        <div class="col-md-3">
                            <ul class="navbar-nav">
                                <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i
                                                class="fas fa-comments text-muted fa-lg"></i></a></li>
                                <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i
                                                class="fas fa-bell text-muted fa-lg"></i></a></li>
                                <li class="nav-item ml-md-auto"><a href="logout.php" class="nav-link"><i
                                                class="fas fa-sign-out-alt text-danger fa-lg"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- end of top-nav -->
            </div>
        </div>
    </div>
</nav>
<!-- end of navbar -->
<section>
    <div class="container-fluid" id="vm-form">
        <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div class="row align-items-center">
                    <div class="col-xl-10 col-12 ml-4 mt-5 mb-xl-0">
                        <script>
                            function Back() {
                                history.back();
                            }
                        </script>
                        <button class="btn btn-danger" onclick="Back();">x</button>
                        <form action="#" method="post" enctype="multipart/form-data">
                            <br/>
                            <img class="align-content-center" height="100px" width="auto"
                                 src="<?php echo $product->product_info['image']; ?>" alt="">
                            <div class="form-row">
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="pro_id">Product ID:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['pro_id']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="pro_code">Product Code:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['product_code']; ?>">
                                </div>
                                <div class="form-group col-md-3 readonly_area">
                                    <label for="name">Name:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['name']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="brand">Brand:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['brand']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="brand">Price:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['price']; ?>">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="model">Model:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['model']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="color">Color:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['color']; ?>">
                                </div>
                                <div class="form-group col-md-1 readonly_area">
                                    <label for="ton">Ton:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['ton']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="cooling_cap">Cooling Capacity:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['cooling_cap']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="heating_cap">Heating Capacity:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['heating_cap']; ?>">
                                </div>
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="pw_input">Power Input:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['pw_input']; ?>">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2 readonly_area">
                                    <label for="pw_input">Power Input:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['pw_input']; ?>">
                                </div>
                                <div class="form-group col-md-3 readonly_area">
                                    <label for="fea_01">Feature 1:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['fea_01']; ?>">
                                </div>
                                <div class="form-group col-md-3 readonly_area">
                                    <label for="fea_02">Feature 2:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['fea_02']; ?>">
                                </div>
                                <div class="form-group col-md-3 readonly_area">
                                    <label for="fea_03">Feature 3:</label><br/>
                                    <input type="text" name="" id=""
                                           value="<?php echo $product->product_info['fea_03']; ?>">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3 readonly_area">
                                    <label for="download">EER</label><br/>
                                    <input value="<?php echo $product->product_info['eer']; ?>">
                                </div>
                                <div class="form-group col-md-3 readonly_area">
                                    <label for="download">Detail Information Download File</label><br/>
                                    <input value="<?php echo $product->product_info['download']; ?>">
                                </div>
                            </div>

                        </form>
                        <a href="update.php?pro_id=<?= $product->product_info['pro_id']; ?>">
                            <button class="btn btn-success">Update</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $db->closeConn(); ?>
</body>
</html>
