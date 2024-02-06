
function validateForm(event) {

    //setup
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var postalcode = document.getElementById("postalcode");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");

    var success = true;

    if (username.value != '') {
        username.style.backgroundColor = "white";
    } else {
        success = false;
         //alert("username is empty and a required field.");
        username.style.backgroundColor = "red";
    }

    if (email.value != ''
        && email.value.indexOf("@") != -1
        && email.value.indexOf(".") != -1
    ) {
        email.style.backgroundColor = "white";
    } else {
        success = false;
        email.style.backgroundColor = "red";
    }

    //###-###-####
    var phone_pattern = /^\d{3}-\d{3}-\d{4}$/;  //REGEX (Regular Expression)
    if (phone.value != '' && phone.value.match(phone_pattern)) {
        phone.style.backgroundColor = "white";
    } else {
        success = false;
        phone.style.backgroundColor = "red";
    }

    //A1A1A1
    var pc_pattern = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    if (postalcode.value != '' && postalcode.value.match(pc_pattern)) {
        postalcode.style.backgroundColor = "white";
    } else {
        success = false;
        postalcode.style.backgroundColor = "red";
    }

    if (firstname.value != '' && firstname.value.length <= 100) {
        firstname.style.backgroundColor = "white";
    } else {
        success = false;
        firstname.style.backgroundColor = "red";
    }

    if (lastname.value != '' && lastname.value.length <= 100) {
        lastname.style.backgroundColor = "white";
    } else {
        success = false;
        lastname.style.backgroundColor = "red";
    }

    //if the validation does not pass - do this:
    if (!success) {
        alert("Please fix the errors on the form and click submit again.");
        event.preventDefault();
    } 
}




window.addEventListener("load", (event) => {

    const form = document.getElementById("form");
    form.addEventListener("submit", validateForm);    

});