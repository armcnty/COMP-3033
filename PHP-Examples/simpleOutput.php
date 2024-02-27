<?php

// Creating output: the print and echo statements

$txt1 = "This is PHP";
$txt2 = "Acadia University";
$x = 5;
$y = 4;

print "<h2>" . $txt1 . "</h2>";
print "Study PHP at " . $txt2 . "<br>";

// Printing variables is easy, php is loosly typed and the type is implied by useage.   
print "The sum of $x and $y is ".($x + $y);

// Similarly print can be used as a function (returns 1 on success) using round braces:
print( "<h2>This is a print() -- i.e., as a function with round braces</h2>" );

// Similarly we can create output with the echo statement:
echo "<h2>This is the echo statement</h2>";

?>
