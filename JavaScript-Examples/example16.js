
function buttonClicked() {

    //get a reference to the DOM element
    var welcome_box = document.getElementById("welcome_box");

    if (welcome_box != null) {
        welcome_box.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        welcome_box.style.fontSize = "22pt";
    }

}

window.addEventListener("load", function(event) {

    document.getElementById("click_me_btn").addEventListener("click", buttonClicked, false);

});
