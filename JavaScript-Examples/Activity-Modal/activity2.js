
function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = 'inline';

    document.getElementById("body").style.backgroundColor = "gray";

}

window.addEventListener("load", (event) => {

    const el = document.getElementById("showModalButton");
    el.addEventListener("click", showModal, false);

});
