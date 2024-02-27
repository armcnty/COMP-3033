<?php

// Write a file to the server's file system

echo "<h2>Writing some text to a file</h2>";
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Mickey Mouse\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\n";
fwrite($myfile, $txt);
fclose($myfile);


// Read that file (fread) and output the contents (echo)

echo "<h2>Reading some text from a file and printing it to the page</h2>";
$myfile = fopen("newfile.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("newfile.txt"));
fclose($myfile);

?>
