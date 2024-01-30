
function buttonClicked() {

    //get a reference to the DOM element
    var welcome_box = document.getElementById("welcome_box");

    if (welcome_box != null) {
        welcome_box.style.backgroundColor = "red";
        welcome_box.style.fontSize = "22pt";
    }

}

window.addEventListener("load", function(event) {

    document.getElementById("click_me_btn").addEventListener("click", buttonClicked, false);

});
