
function buttonClicked() {
    alert("You clicked the button!");
}

window.addEventListener("load", function(event) {

    const element = document.getElementById("start_btn");
    element.addEventListener("click", buttonClicked, false);

});
