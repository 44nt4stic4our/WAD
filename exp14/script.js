function validate(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name == ""){
        alert("Name Required");
        return false;
    }

    if(!emailPattern.test(email)){
        alert("Invalid Email");
        return false;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return false;
    }

    if(mobile.length != 10 || isNaN(mobile)){
        alert("Invalid Mobile Number");
        return false;
    }

    alert("Registration Successful");
    return true;
}