function validate(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user == ""){
        alert("Username Required");
        return false;
    }

    if(pass == ""){
        alert("Password Required");
        return false;
    }

    alert("Login Successful");
    return true;
}