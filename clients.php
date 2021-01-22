<?php 
/*The server should return the list of the clients.*/

$clients= array("Miguel","Jose","Maria","Juan");

//Transform the array clients to JSON
$clientsJSON= json_encode($clients);
echo( $clientsJSON);


