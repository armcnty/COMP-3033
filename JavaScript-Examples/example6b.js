
function callMe(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    var getting = "Hello, " + fullName;
    return getting;
};


window.addEventListener("load", (event) => {
    var result = callMe("Jamie", "Symonds");
    console.log("reesult is: " + result);
    alert(result);
});
 