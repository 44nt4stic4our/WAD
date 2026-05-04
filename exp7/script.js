function validate(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let userPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

    let passPattern =
    /^(?=.*[A-Z])(?=.*[@#$%^&*!]).{8,}$/;

    if(!userPattern.test(user)){
        alert("Invalid Username");
        return false;
    }

    if(!passPattern.test(pass)){
        alert("Invalid Password");
        return false;
    }

    alert("Login Successful");
    return true;
}