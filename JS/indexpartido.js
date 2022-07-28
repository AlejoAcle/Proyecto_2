let partidos = matches.matches

datos_partidos(partidos)

//FUNCION FETCH() DATOS TIEMPO REAL//


// function getFetch(url) {
//     mostrar_spinner()
//     fetch(url, {
//         method: "GET",
//         headers: {
//             "X-Auth-Token": "40834f61c97f47db820d37a926c3ee72"
//         }
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//     }).then(data => {

//         let partidos = data.matches
//         quitar_spinner()
//         let boton_busqueda = document.getElementById("boton_busqueda")
//         boton_busqueda.addEventListener("click", () => {
//         filtroEquipo(partidos)
//      })
//         datos_partidos(partidos)

//     }).catch(err => {
//         console.log(err);
//         alert("Ha ocurrido un ERROR, vuelve a recargar la pagina !")
//     })
// }

// getFetch("https://api.football-data.org/v2/competitions/2014/matches");


// console.log(matches.matches)
//VISITANTE
//  Equipo
// console.log(matches.matches[0].awayTeam.name)
//  Resultado
// console.log(matches.matches[0].score.fullTime.away)

//LOCAL
//  Equipo
// console.log(matches.matches[0].homeTeam.name)
//  Resultado
// console.log(matches.matches[0].score.fullTime.home)

//Fecha Partido
// console.log(matches.matches[0].utcDate)

//Jornada Nº:
// console.log(matches.matches[0].matchday)
// console.log(matches.matches[0])

//clasificacion
//posicion, nombre equipo, partidos jugados, partidos ganados, partidos empatados
//derrotas,goles fuera de casa, goles en contra, diferencia de goles, puntos, ultimso 5 (form)

//TABLA GENERAL CON INFORMACIÓN A MOSTRAR//

function datos_partidos(data) {
    let tabla_partidos = document.getElementById("t_partidos")
    tabla_partidos.innerText = ""

    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")
        let visitante = document.createElement("p")
        visitante.innerHTML = data[i].awayTeam.name
        let local = document.createElement("p")
        local.innerHTML = data[i].homeTeam.name
        //Caso concreto para declarar la fecha
        //Las fechas se manejan como new Date() en JS
        let fecha = new Date(data[i].utcDate)

        let jornada = document.createElement("p")
        jornada.innerHTML = data[i].matchday

        // let resultado_visitante = document.createElement("p")
        // resultado_visitante.innerHTML = data[i].score.fullTime.away

        // let resultado_local = document.createElement("p")
        // resultado_local = data[i].score.fullTime.home

        let resultado = document.createElement("p")
        resultado.innerHTML = data[i].score.fullTime.home + "-" + data[i].score.fullTime.away

        let escudo_local = document.createElement("img")
        escudo_local.setAttribute("src", data[i].homeTeam.crest)
        escudo_local.classList.add("escudo_local")

        let escudo_visitante = document.createElement("img")
        escudo_visitante.setAttribute("src", data[i].awayTeam.crest)
        escudo_visitante.classList.add("escudo_visitante")


        let partidos = [jornada, local, escudo_local, resultado, escudo_visitante, visitante, fecha.toLocaleString()]
        for (let j = 0; j < partidos.length; j++) {
            const td = document.createElement("td")
            td.append(partidos[j])
            tr.append(td)
        }
        tabla_partidos.append(tr)
    }
}



//FILTRADO DATOS SEGUN BÚSQUEDA//

//BÚSQUEDA EQUIPO//

//1.VARIABLE PARA INDICAR EL BOTON y DESENCADENAR LA FUNCIÓN

let boton_busqueda = document.getElementById("boton_busqueda")
boton_busqueda.addEventListener("click", () => {
    filtroEquipo(partidos)
})


let boton_reseteo = document.getElementById("reset")
boton_reseteo.addEventListener("click", () =>{
    reseteo_filtro()
})

function reseteo_filtro(){
    document.getElementById("cajon_input").value = ""
    let botones_seleccion = document.getElementsByName("estadoPartido")
    for (i in botones_seleccion){
        botones_seleccion[i].checked=false
    }
}



//2.CREAR LA FUNCIÓN DE BÚSQUEDA Y FILTRADO, función con parámetro,
//el parámetro será lo que queremos que busque y filtre, en este caso el nombre del club//

function filtroEquipo(club) {
    let cajon_input = document.getElementById("cajon_input").value
    //cada vez que metamos un input(variable) esta se modifica.//

    let botones_filtros = document.querySelector("input[type=radio]:checked")
    // console.log(botones_filtros)
    let equipos_filtrados = club.filter(x => {
        if (x.homeTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) || x.awayTeam.name.toLowerCase().includes(cajon_input.toLowerCase())) {
            return true
        } else {
            return false
        }
    })
    if (botones_filtros === null) {
        return datos_partidos(equipos_filtrados)
    }
    let filtros_botones = equipos_filtrados.filter(partido_resultado => {
        if (botones_filtros.value == "Ganado") {
            if ((partido_resultado.homeTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) && partido_resultado.score.winner == "HOME_TEAM") ||
                (partido_resultado.awayTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) && partido_resultado.score.winner == "AWAY_TEAM")) {
                return true
            }
        }

        if (botones_filtros.value == "Perdido") {
            if ((partido_resultado.homeTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) && partido_resultado.score.winner == "AWAY_TEAM") ||
                (partido_resultado.awayTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) && partido_resultado.score.winner == "HOME_TEAM")) {
                return true
            }
        }

        if (botones_filtros.value == "Empatado" && partido_resultado.score.winner == "DRAW") {
            return true
        }

        if (botones_filtros.value == "Proximo" && partido_resultado.status == "SCHEDULED") {
            return true
        }

    })





    //2.3 llamada a la función de crear la tabla, DENTRO, de la función para filtrar, así solo usa el ARRAY FILTRADO para crear la tabla cuando se lo pido
    datos_partidos(filtros_botones)
}


//USANDO BUCLE FOR,
//Diferencia, hay que usar el .push para añadir elementos a la ARRAY(nueva, la que lleva lo que quiero filtrar)
// function clubes_filtro(x) {
//     let input = document.getElementById("cajon_input").value
//     let array_filtrado = []
//     for (let i = 0; i < x.length; i++) {
//         if (x[i].homeTeam.name.toLowerCase().includes(input.toLowerCase()) || x[i].awayTeam.name.toLowerCase().includes(input.toLowerCase())) {
//             array_filtrado.push(x[i])
//         }
//     }
// datos_partidos(array_filtrado)
// }




//if(   (x.homeTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) && x.score.winner == "HOME_TEAM") ||
//  (x.awayTeam.name.toLowerCase().includes(cajon_input.toLowerCase()) && x.score.winner == "AWAY_TEAM")  )


function quitar_spinner(){
    document.getElementById("spinner_loader").style.display="none"
    document.getElementById("dots_spinner").style.visibility="hidden"
}

function mostrar_spinner(){
    document.getElementById("spinner_loader").style.display="block"
    document.getElementById("dots_spinner").style.visibility="visible"

}

quitar_spinner()