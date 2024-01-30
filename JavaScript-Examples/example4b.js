
// +    Addition​
var a = 5 + 1;
console.log("the result of addition is: " + a);
alert("the result of addition is: " + a);

// -    Subtraction​
var b = 5 - 1;
console.log("the result of subtraction is: " + b);
alert("the result of subtraction is: " + b);

// *    Multiplication​
var c = 5 * 2;
console.log("the result of multiplication is: " + c);
alert("the result of multiplication is: " + c);

// **    Exponentiation (ES2016)​
var d = 2 ** 2;
console.log("the result of exponentiation is: " + d);
alert("the result of exponentiation is: " + d);

// /    Division​
var e = 5 / 2;
console.log("the result of division is: " + e);
alert("the result of division is: " + e);

// %    Modulus (Remainder)​
var f = 10 % 3;
console.log("the result of mod 3 is: " + f);
alert("the result of mod 3 is: " + f);

// ++    Increment​
var g = 1;
g++;
g++;
g++;
console.log("the result of increment is: " + g);
alert("the result of increment is: " + g);

// --    Decrement
var h = 10;
h--;
h--;
h--;
console.log("the result of decrement is: " + h);
alert("the result of decrement is: " + h);

/* 
the idea with INCREMENT and DECREMENT is this:
you could do:
*/
var i = 1;
i = i + 1;
i = i + 1;
console.log("i is: " + i);
console.log("the result of increment is: " + i);
alert("the result of increment is: " + i);

//but increment and decrement with ++ and -- is just SHORTHAND:
var j = 1;
j++;
j++;
console.log("the result of increment is: " + j);
alert("the result of increment is: " + j);
