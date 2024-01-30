
function buttonClicked() {
    var username_box = document.getElementById('username');
    
    if (username_box != null) {

        if (username_box.value.trim() != '') {
        
            username_box.style.backgroundColor = 'white';
            alert('Welcome, ' + username_box.value);
            username_box.value = '';
    
        } else {
            
            username_box.style.backgroundColor = 'yellow';
            alert('You must enter a username');
        
        }
    }
}

window.addEventListener("load", function(event) {

    document.getElementById("go_btn").addEventListener("click", buttonClicked, false);

});
