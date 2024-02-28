<!DOCTYPE html>
<html>
	<head>
		<title>My AMPPS index page</title>    
		<style> 
		.myBox {
			height: 100px;
 			width: 100px;
		}
		.myDiv-1 {
			background-color: cyan; 
		}
		.myDiv-2 {
			background-color: green;
			color: white;
		}
		</style>
	</head>
	<body>
		<p>Hello World from HTML!</p>
		<?php
			function ptxt( $txt ) {
				echo "<p>".$txt."</p>\n";
			}
			function htxt( $txt, $i=5 ) {
				echo "<h".$i.">".$txt."</h".$i.">\n";
			}
			function dtxt( $txt, $class="none") {
				echo "<div class=\"".$class."\">".$txt."</div>\n";
			}
			
			$hw = "Hello World from PHP! String functions are fun :)";
			echo $hw;
			ptxt( $hw ); // ptxt is a wrapper function, encloses string in <p>tags</p>
			htxt( strtoupper($hw), 2 ); // convert string case to uppper, wrap in heading tags
			ptxt( strtolower($hw) ); // convert case to lower
			ptxt( strrev($hw) ); // string reversal 
			htxt( $ss = str_shuffle($hw), rand(1,5) ); // string shuffle
			htxt( md5($ss), 3 );  // MD5 hash of the shuffled string
			dtxt( $hw, "myDiv-2 myBox" ); // wrap with classed <div> wrapper 
			for( $i=0; $i<10; $i++ ) { // basic for loop
				$cls = "myDiv-".($i % 2 == 0 ? "1" : "2"); // ternary operator
				dtxt( $hw, $cls ); 
			}
		?>
	</body>
</html>
