
function buttonClicked() {
    
    var username_box = document.getElementById('username');

    if (username_box.value.toUpperCase().trim() == "JAMIE") {
        alert("you shall not pass.");
    } else {
        alert(username_box.value);
    }

    username_box.value = '';

}

window.addEventListener("load", function(event) {

    document.getElementById("go_btn").addEventListener("click", buttonClicked, false);

});
