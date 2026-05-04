function validate(){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!namePattern.test(fname) || fname.length < 6){
        alert("Invalid First Name");
        return false;
    }

    if(lname == ""){
        alert("Last Name Required");
        return false;
    }

    if(pass.length < 6){
        alert("Password must be 6 characters");
        return false;
    }

    if(!emailPattern.test(email)){
        alert("Invalid Email");
        return false;
    }

    if(mobile.length != 10 || isNaN(mobile)){
        alert("Invalid Mobile Number");
        return false;
    }

    if(address == ""){
        alert("Address Required");
        return false;
    }

    alert("Registration Successful");
    return true;
}