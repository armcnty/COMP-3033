
let str = "Welcome to NSCC";

//load the HTML file using LIVE SERVER and Open the CONSOLE in your BROWSER
console.log("length of [", str, "] is ",str.length);

for (let i = 0; i < str.length; i++) {
    console.log("letter at position ",i," is ",str[i]);
}

if (str[0].toUpperCase() == "W") {
    console.log("nailed it");
    //
} else {
    console.log("not it");
    //
    //
}

