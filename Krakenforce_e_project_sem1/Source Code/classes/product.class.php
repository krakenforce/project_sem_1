<?php
    
    include_once realpath(dirname(__FILE__) . '/..') . '/includes/functions.php';
    
    class Product
    {
        
        public $product_info = array(
            'pro_id' => null,
            'product_code' => null,
            'name' => null,
            'price' => null,
            'brand' => null,
            'type' => null,
            'image' => null,
            'download' => null,
            'model' => null,
            'color' => null,
            'ton' => null,
            'cooling_cap' => null,
            'heating_cap' => null,
            'pw_input' => null,
            'eer' => null,
            'fea_01' => null,
            'fea_02' => null,
            'fea_03' => null
        );
        
        
        public static function find_all_products()
        {
            return self::findThis_query('SELECT * from product inner join product_detail pd on product.pro_id = pd.pro_id;');
        }
        
        public static function find_product_by_id($id)
        {
            $result_set = self::findThis_query("SELECT * from product inner join product_detail pd on product.pro_id = pd.pro_id where product.pro_id= $id LIMIT 1;");
            return !empty($result_set) ? array_shift($result_set) : false;
        }
        
        // dùng "select *" để pass vào function này:
        public static function findThis_query($sql)
        {
            $conn = new Database();
            $result_set = $conn->pdo->query($sql);
            $array_of_objects = array();
            while ($row = $result_set->fetch(PDO::FETCH_ASSOC))
            {
                $array_of_objects[$row['pro_id']] = self::instantiate($row);
            }
            return $array_of_objects;
        }
        
        public static function findThis_query_prepared($sql, $param)
        {
            $conn = new Database();
            $result_set = $conn->query_with_params($sql, $param);
            $array_of_objects = array();
            while ($row = $result_set->fetch(PDO::FETCH_ASSOC))
            {
                $array_of_objects[$row['pro_id']] = self::instantiate($row);
            }
            return $array_of_objects;
        }
        
        public static function instantiate($row)
        {
            $object = new self;
            
            foreach ($row as $attribute => $value)
            {
                if ($object->attribute_exists($attribute))
                {
                    $object->product_info[$attribute] = $value;
                }
            }
            return $object;
            
        }
        
        private function attribute_exists($attribute)
        {
            $object_attributes = $this->product_info;
            return key_exists($attribute, $object_attributes);
        }
        
        public static function find_products_by_brand($brand)
        {
            $brand = strtolower(trim($brand));
            $result_set = self::findThis_query("SELECT * from product inner join product_detail on product.pro_id = product_detail.pro_id where product.brand = '$brand';");
            return $result_set;
        }
        
        public static function find_products_by_type($type)
        {
            $type = strtolower(trim($type));
            $result_set = self::findThis_query("SELECT * from product inner join product_detail on product.pro_id = product_detail.pro_id where product.type = '$type';");
            return $result_set;
        }
        
        public static function delete_product_by_id($id)
        {
            $conn = new Database();
            $sql = "DELETE FROM product where pro_id = ?;";
            $param = [$id];
            $result = $conn->query_with_params($sql, $param);
            return $result;
        }
        
        public static function find_products_by_search($keyword)
        {
            $keyword = trim(strtolower($keyword));
            $parameter = ["%{$keyword}%"];
            $sql = "SELECT * from product inner join product_detail pd on product.pro_id = pd.pro_id where (LOWER (CONCAT_WS(product.pro_id, product.name, product.product_code, product.brand,product.price, product.type, pd.model, pd.eer, pd.color, pd.fea_01,pd.fea_02,pd.fea_03)) like ? );";
            return self::findThis_query_prepared($sql, $parameter);
            
        }
        
        public static function find_product_by_brand_and_type($brand, $type)
        {
            $brand = strtolower(trim($brand));
            $type = strtolower(trim($type));
            $result_set = self::findThis_query("SELECT * FROM product INNER JOIN product_detail pd on product.pro_id = pd.pro_id WHERE brand = '$brand' AND type = '$type';");
            return $result_set;
        }
        
        public static function find_all_products_with_limit($offset, $limit)
        {
            return self::findThis_query("SELECT * from product inner join product_detail pd on product.pro_id = pd.pro_id LIMIT $offset, $limit;");
        }
        
        public static function find_products_by_search_with_limit($keyword, $offset, $limit)
        {
            $keyword = trim(strtolower($keyword));
            $parameter = ["%{$keyword}%"];
            $sql = "SELECT * from product inner join product_detail pd on product.pro_id = pd.pro_id where (LOWER (CONCAT_WS(product.pro_id, product.name, product.product_code, product.brand, product.type, pd.model, pd.eer, pd.color, pd.fea_01,pd.fea_02,pd.fea_03)) like ? LIMIT $offset, $limit);";
            return self::findThis_query_prepared($sql, $parameter);
            
        }
    }
