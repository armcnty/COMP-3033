
const hst_rate = 0.15;

//functions often compute a return value which is "returned" back to the "caller" (the invoked it)​
function calculateHST(subtotal) {
    let hst = subtotal * hst_rate;
    console.log("calculateHST - subtotal: ", subtotal, " hst: ", hst);
    return hst;
}

/* 
* using the 'load' event for the page - this will 'invoke' the function 
* when the page is loaded, we do this for safety
* https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
*/
window.addEventListener("load", (event) => {

    console.log("page is fully loaded");

    let subtotal = 1234.56;

    //invoke the function, assign the return value to a var (hst)
    let hst = calculateHST(subtotal);

    console.log("hst on ", subtotal, " is: ", hst)
    alert("hst is " + hst);

});









