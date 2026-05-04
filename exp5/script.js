function saveData(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let user = {name, email};

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"POST",
        body: JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(() => {
        window.location = "data.html";
    });
}