<?php

include_once dirname(__FILE__, 2) . '/includes/functions.php';

class Product {

    public $product_id;
    public $name;
    public $price;
    public $download;
    public $type;
    public $quantity;
    public $description;
    public $photo;
    public $pro_status;
    public $category_id;


    public static function find_all_products()
    {
        return self::findThis_query('SELECT * from product;');
    }

    public static function find_product_by_id($id)
    {
        $result_set = self::findThis_query("SELECT * from product where id= $id LIMIT 1;");
        return !empty($result_set) ? array_shift($result_set) : false ;
    }

    // dùng "select *" để pass vào function này:
    public static function findThis_query($sql)
    {
        $conn = new Database();
        $result_set = $conn->pdo->query($sql);
        $array_of_objects = array();
        while ($row = $result_set->fetch(PDO::FETCH_ASSOC)){
            $array_of_objects[] = self::instantiate($row);
        }
        return $array_of_objects;
    }

    public static function instantiate($row)
    {
        $object = new self;

        foreach ($row as $attribute => $value) {
            if($object->attribute_exists($attribute)){
                $object->$attribute = $value;
            }
        }
        return $object;

    }

    private function attribute_exists($attribute)
    {
        $object_attributes = get_object_vars($this);
        return key_exists($attribute, $object_attributes);
    }

    public function find_products_by_brand($brand)
    {
        $result_set = self::findThis_query("SELECT * from product left join category on product.category_id = category.category_id where category_name = $brand;");
        return $result_set;
    }
}
