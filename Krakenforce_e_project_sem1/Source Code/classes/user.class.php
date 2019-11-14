<?php

include_once realpath(dirname(__FILE__) . '/..') . '/includes/functions.php';

class User {

    // table: users
    // đổi các properties này thành tên giống trong user-table của database:

    public $user_id;
    public $password;
    public $username;

    // ----------------------------

    public static function find_all_users()
    {
        return self::findThis_query('SELECT * from users;');
    }

    public static function find_user_by_id($id)
    {
        $result_set = self::findThis_query("SELECT * from users where id= $id LIMIT 1;");
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

    // kiểm tra nếu user tồn tại trong user-table, nếu có: trả về user object
    public static function verify_user($username, $password) {
        //prepared query to find if there is a user:
        $conn = new Database();
        $sql = "SELECT * from users where username = ? and password = ? LIMIT 1;";
//        $stmt = $conn->pdo->prepare($sql);
//        $stmt->execute([$username, $password]);
        $param = [$username, $password];
        $result_set = $conn->query_with_params($sql, $param);

        //turn that user into object, if it exists:
        $array_of_objects = array();
        while ($row = $result_set->fetch(PDO::FETCH_ASSOC)){
            $array_of_objects[] = self::instantiate($row);
        }
        return !empty($array_of_objects)? array_shift($array_of_objects) : false;

    }
}
