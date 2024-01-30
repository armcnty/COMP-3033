
function buttonClicked() {

    //get the value
    var username = document.getElementById('username_box').value;

    if (username != '') {
        //set the value, show the display box
        document.getElementById('display_box').innerHTML = 'Welcome, ' + username;
        document.getElementById('display_box').style.display = 'inline';

        //hide the welcome box
        document.getElementById('welcome_box').style.display = 'none';
    }
}

window.addEventListener("load", function(event) {

    document.getElementById("go_btn").addEventListener("click", buttonClicked, false);

});
