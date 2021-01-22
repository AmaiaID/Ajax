function getClients() {


    //Declarar el objeto XMLHttpRequest
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "clients.php", true);
    //stablish the header 
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //Asign a funtion to manage the changes
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            console.log("respuesta recibida!");
            if (xmlHttp.status == 200) {
               //Obtain arrayClients in JSON format
                let textoRespuesta = xmlHttp.responseText;
               
                //transform to array parsing the JSON
                let arrayClients = JSON.parse(textoRespuesta);
               
                
                document.getElementById("clients").innerHTML ="";
                //GO through the array and show the clients
                for(let k=0;k<arrayClients.length;k++){
                    document.getElementById("clients").innerHTML +=
                    "<li>"+ arrayClients[k]+"</li>";
                }

            }
        }
    }
    xmlHttp.send(); //in this case no parameter is sent
}
