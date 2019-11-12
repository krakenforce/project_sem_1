<?php
    require_once '../../classes/customer.class.php';
    $db = new Customer_Database();
    if ($_SERVER['REQUEST_METHOD'] === 'POST'):
        $statement = "SELECT * FROM customer where concat(customer_id,customer_name,email,phone,contact_type) LIKE ?";
        $param = ["%{$_POST['search']}%"];
        $stmt = $db->selectDataParam($statement,$param);
    endif;
?>
<!--<script>-->
<!--    $(document).ready(function () {-->
<!--        $('#delete-btn').on("click", function () {-->
<!--            var pro_id = $('#id_of_product').val();-->
<!--            $.ajax({-->
<!--                type: "POST",-->
<!--                url: "delete.php",-->
<!--                data: {pro_id: pro_id},-->
<!--                success: function (result) {-->
<!--                    alert(result);-->
<!--                    if (result == "success") {-->
<!--                        window.location.reload();-->
<!--                    }-->
<!--                    ;-->
<!--                }-->
<!--            });-->
<!--        });-->
<!--        $('.delete_row').on("click", function () {-->
<!--            if (confirm("are you sure?")) {-->
<!--                var pro_id = $(this).attr('id'),-->
<!--                    table_row = $(this).closest("tr");-->
<!--                console.log(pro_id);-->
<!--                $.ajax({-->
<!--                    type: "POST",-->
<!--                    url: "delete.php",-->
<!--                    data: {pro_id: pro_id},-->
<!--                    success: function (result) {-->
<!--                        alert(result);-->
<!--                        if (result == "success") {-->
<!--                            table_row.remove();-->
<!--                        }-->
<!--                    }-->
<!--                });-->
<!--            }-->
<!---->
<!--        });-->
<!--    });-->
<!--</script>-->

<body>
<div class="container">
    <table border="1" cellspacing="0" align="center" class="table table-striped table-hover">
        <thead>
        <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Contact type</th>
            <th scope="col">Update information</th>
            <th scope="col">Delete customer</th>
        </tr>
        </thead>
        <?php while($customer = $stmt->fetch(PDO::FETCH_ASSOC)):
            extract($customer); ?>
        <tr>
            <td scope="row">
                <?php echo $id ?>
            </td>
            <td scope="row">
                <?php echo $customer_name ?>
            </td>
            <td scope="row">
                <?php echo $email ?>
            </td>
            <td scope="row">
                <?php echo $customer->customer_info['contact_type']; ?>
            </td>
        </tr>
        <?php endwhile; $db->closeConn();?>
</div>
</td>
<!--<td scope="row">-->
<!--    <a href="update.php?pro_id=--><?//= $customer->customer_info['customer_id']; ?><!--">Update</a>-->
<!--</td>-->
<!--<td scope="row">-->
<!--    <button id="--><?php //echo $customer->customer_info['customer_id']; ?><!--" class="btn-warning delete_row">Delete</button>-->
<!--</td>-->
</tr>
<?php
//    endforeach;
//    $db->closeConn();
//?>
</table>

</body>
</html>