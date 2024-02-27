<?php

// Very simple while loop

echo "<h2>Some output from a while loop</h2>";

$i = 1;
while ($i < 6) {
  if ($i == 3) break;
  echo $i;
  $i++;
}

echo "<h2>Some sample for loop output</h2>";

// For loops are just as easy: 

for ($x = 0; $x <= 10; $x++) {
  if ($i == 3) break;
  echo "The number is: $x <br>";
}

?>
