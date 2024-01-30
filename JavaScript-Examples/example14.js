
function buttonClicked() {

    var datetime_box = document.getElementById('datetime_box');
    datetime_box.value = new Date().toString();

}

window.addEventListener("load", function(event) {

    document.getElementById("go_btn").addEventListener("click", buttonClicked, false);

});
