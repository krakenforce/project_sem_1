<?php
    
    include_once realpath(dirname(__FILE__) . '/..') . '/includes/functions.php';
    
    class Customer
    {
        public $customer_info = array(
            'customer_id' => null,
            'customer_name' => null,
            'email' => null,
            'phone' => null,
            'contact_type' => null
        );
        
        // to access the id of customer_example, do: echo $customer_example->show_customer_info('customer_id')
        public function show_customer_info($property)
        {
            $property = trim(strtolower($property));
            if ($this->attribute_exists($property))
            {
                return $this->customer_info[$property];
            } else
            {
                return "Property doesn't exist in customer_info";
            }
        }
        
        public static function find_all_customers()
        {
            return self::findThis_query('SELECT * from customer;');
        }
        
        public static function find_customer_by_id($id)
        {
            $result_set = self::findThis_query("SELECT * from customer where customer_id = $id LIMIT 1;");
            return !empty($result_set) ? array_shift($result_set) : false;
        }
        
        public static function find_customers_by_name($name)
        {
            $name = strtolower(trim($name));
            $result_set = self::findThis_query("SELECT * from customer where customer_name = '$name';");
            return $result_set;
        }
        
        public static function delete_customer_by_id($id)
        {
            $conn = new Database();
            $sql = "DELETE FROM customer where customer_id = ?;";
            $param = [$id];
            $result = $conn->query_with_params($sql, $param);
            return $result;
        }
        
        public static function find_customers_by_search($keyword)
        {
            $keyword = trim(strtolower($keyword));
            $parameter = ["%{$keyword}%"];
            $sql = "SELECT * from customer where (LOWER (CONCAT_WS(customer_id, customer_name, email, phone,contact_type)) like ? );";
            return self::findThis_query_prepared($sql, $parameter);
        }
        
        // dùng "select *" để pass vào function này:
        public static function findThis_query($sql)
        {
            $conn = new Database();
            $result_set = $conn->pdo->query($sql);
            $array_of_objects = array();
            while ($row = $result_set->fetch(PDO::FETCH_ASSOC))
            {
                $array_of_objects[$row['customer_id']] = self::instantiate($row);
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
                $array_of_objects[$row['customer_id']] = self::instantiate($row);
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
                    $object->customer_info[$attribute] = $value;
                }
            }
            return $object;
        }
        
        private function attribute_exists($attribute)
        {
            $object_attributes = $this->customer_info;
            return key_exists($attribute, $object_attributes);
        }
    }