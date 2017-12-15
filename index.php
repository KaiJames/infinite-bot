<?php
require('/home/fusionra/infiniteradio.us/staff/_inc/glob.php');
$q = $db->query("SELECT * FROM users WHERE is_away = '1' LIMIT 1000");
if($db->num($q) <1) {
	die('Nobody away!');
}	
$sth = mysql_query("SELECT ...");
$rows = array();
while($r = mysql_fetch_assoc($q)) {
    $rows['username'] = $r['username'];
	
	print json_encode($rows);
}
