
function itWasClicked() {

    //get the value from the element in the DOM
    var username = document.getElementById("username").value;

    //safety first
    if (username != "") {

        //get a reference to the output location (div element) in the DOM
        var output_location = document.getElementById("output");

        //set the innerHTML on the element
        output_location.innerHTML = "<h1>Hello, " + username + "</h1>";

    } else {
        alert("you gotta type something in...");
    }
}


window.addEventListener("load", (event) => {
    const el = document.getElementById("user_button");
    el.addEventListener("click", itWasClicked, false);
});
