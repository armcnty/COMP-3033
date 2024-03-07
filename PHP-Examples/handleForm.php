<?php
// This is quite a crude implementation of Create (ie., INSERT) functionality
// Note: you would never include the server, username, password, and db strings
// in a production environment, this is just a quick example. 

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];

$servername = "localhost";
$username = "contacts_user";
$password = "passw0rd";
$db = "contacts_db";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

$sql = "insert into contact(firstname,lastname,email) values('$fname','$lname','$email')";

if ($conn->query($sql) === TRUE) {
	echo "ADDED: ".$fname.", ".$lname.", ".$email;
} else {
	echo "Error: ".$sql."<br>".$conn->error;
}

$conn->close();

?>
<br/>
<a href="welcome.php">Back to welcome.php</a>
