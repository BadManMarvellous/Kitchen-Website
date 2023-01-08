var attempt = 4;

function validate() {
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    // var password2 = document.getElementById("password2").value;

if ( email == "Formget" && password1 == "formget#123" ) {
    alert("Login Successfully");
    window.location = "success.html"
    return false;
    } else {
        attempt--;
        alert("You have left "+attempt+" attempt;");
        if (attempt == 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password1").disabled = true;
            document.getElementById("btn1").disabled = true;
            return false;
        }
    }
}