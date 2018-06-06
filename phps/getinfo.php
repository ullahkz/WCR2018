<?php

if(isset($_GET['email'])){
	echo $_GET['email'];
}

$url_parameter = explode('&',$_SERVER['QUERY_STRING']);
print_r($url_parameter);

?>