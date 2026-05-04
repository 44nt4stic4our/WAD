function loadData(){

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            document.getElementById("result")
            .innerHTML = this.responseText;

        }
    };

    xhttp.open("GET",
    "https://jsonplaceholder.typicode.com/todos/1",
    true);

    xhttp.send();
}