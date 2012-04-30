<?php # Script 15.x - mysqli_connect.php

// This file contains the database access information. 
// This file also establishes a connection to MySQL 
// and selects the database.

// Set the database access information as constants:
DEFINE ('DB_USER', 'summercollege');
DEFINE ('DB_PASSWORD', 'Br00ke!618');
DEFINE ('DB_HOST', 'h50mysql27.secureserver.net');
DEFINE ('DB_NAME', 'summercollege');

// Make the connection:
$dbc = mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Set the encoding...
mysqli_set_charset($dbc, 'utf8');

// Use this next option if your system doesn't support mysqli_set_charset().
//mysqli_query($dbc, 'SET NAMES utf8');
		
function get_password_hash($password) {
	
	// Need the database dbcection:
	global $dbc;
	
	// Return the escaped password:
	return mysqli_real_escape_string ($dbc, hash_hmac('sha256', $password, 'c#haRl891', true));
	
} // End of get_password_hash() function.

?>