
function dataChanged() {
    alert("text in the field changed.")
}

window.addEventListener("load", function(event) {

    const element = document.getElementById("username");
    element.addEventListener("change", dataChanged, false);

});
    