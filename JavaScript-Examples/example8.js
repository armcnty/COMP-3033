
function itWasClicked() {
    alert("you clicked it.");
}

window.addEventListener("load", (event) => {

    //add 'click' event listener to user_button, invoke itWasClicked()
    const el = document.getElementById("user_button");
    el.addEventListener("click", itWasClicked, false);
    
});

