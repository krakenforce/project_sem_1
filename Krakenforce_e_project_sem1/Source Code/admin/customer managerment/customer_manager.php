<?php
    include_once '../header.php'; ?>
<?php
    // set current page & limit & off-set cho page:
    $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
    $limit = 8; // -> so luong rows tung trang
    if ($current_page == 0 || $current_page == 1)
    {
        $off_set = 0;
    } else
    {
        $off_set = ($current_page * $limit) - $limit;
    }
    
    //tim so luong rows/records cua search vs khong search:
    if (isset($_GET['search']))
    {
        $search_key_word = $_GET['search'];
        $all_customers = Customer::find_customers_by_search($search_key_word);
        $total_record = count($all_customers);
    } else
    {
        $all_customers = Customer::find_all_customers();
        $total_record = count($all_customers);
    }
    
    //tim` tong so luong trang/pages tu` tong~ so luong rows + limit tung` trang:
    $customers = array_slice($all_customers, $off_set, $limit);
    $total_pages = ceil($total_record / $limit);


?>
<script>
    $(document).ready(function () {
        $('.delete_row').on("click", function () {
            if (confirm("are you sure?")) {
                var customer_id = $(this).attr('id'),
                    table_row = $(this).closest("tr");
                console.log(customer_id);
                $.ajax({
                    type: "POST",
                    url: "delete_customer.php",
                    data: {customer_id: customer_id},
                    success: function (result) {
                        alert(result);
                        if (result == "success") {
                            table_row.remove();
                        }
                    }
                });
            }
        });
    });
</script>

<head>
    <meta charset="UTF-8">
    <!--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
            integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
            crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="title icon" href="../images/krakenforce_logo_on1_icon.ico">
    <title>Adminstator</title>
</head>
<body>
<nav class="navbar navbar-expand-md navbar-light">
    <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse"
            data-target="#myNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
        <div class="container-fluid">
            <div class="row">
                <!-- sidebar -->
                <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                    <a href="../admin_index.php"
                       class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Cosy Air
                        Conditioner</a>
                    <div class="bottom-border pb-3">
                        <img src="../images/krakenforce%20logo.jpg" width="50" class="rounded-circle mr-3">
                        <a href="#" class="text-white">Kraken Force</a>
                    </div>
                    <ul class="navbar-nav flex-column mt-4">
                        <li class="nav-item"><a href="../admin_index.php"
                                                class="nav-link text-white p-3 mb-2 sidebar-link "><i
                                        class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link current"><i
                                        class="fas fa-user text-light fa-lg mr-3"></i>Customer</a></li>
                        <li class="nav-item"><a href="../product.php"
                                                class="nav-link text-white p-3 mb-2 sidebar-link "><i
                                        class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Product</a></li>
                        <li class="nav-item"><a href="../../public/pages/index.php"
                                                class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-snowflake text-light fa-lg mr-3"></i>Cosy Homepage</a></li>
                    </ul>
                </div>
                <!-- end of sidebar -->

                <!-- top-nav -->
                <div class="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <h4 class="text-light text-uppercase mb-0">Customer</h4>
                        </div>
                        <div class="col-md-5">
                            <form>
                                <div class="input-group">
                                    <input type="search" name="search" class="form-control search-input text-light"
                                           placeholder="Search...">
                                    <button type="submit" name="search-btn" id="search-btn"
                                            class="btn btn-white search-button"><i
                                                class="fas fa-search text-danger"></i></button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-3">
                            <ul class="navbar-nav">
                                <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i
                                                class="fas fa-comments text-muted fa-lg"></i></a></li>
                                <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i
                                                class="fas fa-bell text-muted fa-lg"></i></a></li>
                                <li class="nav-item ml-md-auto"><a href="../logout.php" class="nav-link"><i
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
<section>
    <div class="container-fluid">
        <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div class="row align-items-center">
                    <div class="col-xl-12 col-12 mt-5 mb-xl-0">
                        <br/>
                        <br/>
                        <table class="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Contact type</th>
                                <th scope="col">Delete customer</th>
                            </tr>
                            </thead>
                            <?php foreach ($customers as $customer): ?>
                                <tr>
                                    <td scope="row">
                                        <?php echo $customer->customer_info['customer_id']; ?>
                                    </td>
                                    <td scope="row">
                                        <?php echo $customer->customer_info['customer_name']; ?>
                                    </td>
                                    <td scope="row">
                                        <?php echo $customer->customer_info['phone']; ?>
                                    </td>
                                    <td scope="row">
                                        <?php echo $customer->customer_info['email']; ?>
                                    </td>
                                    <td scope="row">
                                        <?php echo $customer->customer_info['contact_type']; ?>
                                    </td>
                                    <td scope="row">
                                        <button id="<?php echo $customer->customer_info['customer_id'];?>" class="btn btn-danger delete_row">Delete</button>
                                    </td>
                                </tr>
                            <?php endforeach;
                                $db->closeConn(); ?>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="d-flex flex-column">
    <div class="d-flex justify-content-center">
        <ul class="pagination">
            <?php
                if ((isset($_GET['search'])))
                {
                    for ($i = 1; $i <= $total_pages; $i++)
                    {
                        if ($i == $current_page)
                        {
                            echo "<li class=\"page-item\"><a class=\"page-link page_active\" href=\"customer_manager.php?search={$_GET['search']}&page={$i}\">{$i}</a></li>";
                        } else
                        {
                            echo "<li class=\"page-item\"><a class=\"page-link\" href=\"customer_manager.php?search={$_GET['search']}&page={$i}\">{$i}</a></li>";
                        }
                        
                    };
                } else
                {
                    
                    for ($i = 1; $i <= $total_pages; $i++)
                    {
                        if ($i == $current_page)
                        {
                            echo "<li class=\"page-item\"><a class=\"page-link page_active\" href=\"customer_manager.php?page={$i}\">{$i}</a></li>";
                        } else
                        {
                            echo "<li class=\"page-item\"><a class=\"page-link\" href=\"customer_manager.php?page={$i}\">{$i}</a></li>";
                        }
                        
                    }
                }
            ?>
        </ul>
    </div>
</div>
<footer>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div class="row border-top pt-3">
                    <div class="col-lg-6 text-center">
                        <ul class="list-inline">
                            <li class="list-inline-item mr-2">
                                <a href="../admin_index.php" class="text-dark">Dashboard</a>
                            </li>
                            <li class="list-inline-item mr-2">
                                <a href="customer_manager.php" class="text-dark">Customer</a>
                            </li>
                            <li class="list-inline-item mr-2">
                                <a href="../product.php" class="text-dark">Product</a>
                            </li>
                            <li class="list-inline-item mr-2">
                                <a href="../../public/pages/index.php" class="text-dark">Cosy AC Homepage</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 text-center">
                        <p>&copy; 2019 Copyright. Made With <i class="fab fa-gitkraken text-danger"></i> by <span
                                    class="text-success">Kraken Force</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- end of footer -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>
</body>

</html>