




login()

function getFetch() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "usuario": "Alejo",
      "password": "123123"
    });
    
    var requestOptions = {
      method: 'POST',
      mode:'no-cors',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/ruta1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function login() {
    let login_button = document.getElementById("confirm_button")
    login_button.addEventListener("click", () => {
        getFetch()
        console.log("hola")
    })
}




function spinner_out() {
    document.getElementById("spinner_loader").style.display = "none"
    document.getElementById("dots_spinner").style.visibility = "hidden"
}

function spinner_in() {
    document.getElementById("spinner_loader").style.display = "block"
    document.getElementById("dots_spinner").style.visibility = "visible"

}

spinner_out()