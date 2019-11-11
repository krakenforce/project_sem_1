<?php

include_once 'header.php';

$session->logout();
header("location: login.php");

