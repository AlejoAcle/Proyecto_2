let partidos = matches.matches
quitar_spinner()

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
//         stadistics(partidos);
//         stadistics2(partidos)




//     }).catch(err => {
//         console.log(err);
//         alert("Ha ocurrido un ERROR, vuelve a recargar la pagina !")
//     })
// }

// getFetch("https://api.football-data.org/v2/competitions/2014/matches");



//ESTADÍSTICAS-------------------------------------------------------------------------//

function stadistics(data) {
    let array_stadistics = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].status !== "FINISHED") {
            continue
        }

        let local_team_name = data[i].homeTeam.name
        // console.log(local_team_name)

        let local_team_id = data[i].homeTeam.id
        // console.log(local_team_id)

        let goles_local = data[i].score.fullTime.home
        // console.log(goles_local)

        let visitante_team_name = data[i].awayTeam.name
        // console.log(visitante_team_name)

        let visitante_team_id = data[i].awayTeam.id
        // console.log(visitante_team_id)

        let goles_visitante = data[i].score.fullTime.away
        // console.log(goles_visitante)

        let equipo_local_encontrado;

        array_stadistics.forEach(x => {
            if (x.id === local_team_id) {
                equipo_local_encontrado = x;
            }
        })
        if (equipo_local_encontrado == undefined) {
            array_stadistics.push({
                id: local_team_id,
                name: local_team_name,
                goles: goles_local,
                matches: 1
            })
        } else {
            equipo_local_encontrado.goles += goles_local
            equipo_local_encontrado.matches++
            // estos partidos se van añadiendo a matches de la array creada
        }

        let equipo_visitante_econtrado;

        array_stadistics.forEach(x => {
            if (x.id === visitante_team_id) {
                equipo_visitante_econtrado = x;
            }
        })
        if (equipo_visitante_econtrado == undefined) {
            array_stadistics.push({
                id: visitante_team_id,
                name: visitante_team_name,
                goles: goles_visitante,
                matches: 1
            })
        } else {
            equipo_visitante_econtrado.goles += goles_visitante
            equipo_visitante_econtrado.matches++
        }

        // console.log(equipo_visitante_econtrado)
        for (let j = 0; j < array_stadistics.length; j++) {
            let media_goles = array_stadistics[j].goles / array_stadistics[j].matches
            array_stadistics[j].average = media_goles
        }

    }
    array_stadistics.sort((a, b) => b.average - a.average)
    // console.log(array_stadistics)
    t_stadistics(array_stadistics)

}

stadistics(partidos)

//Estadisticas 5 con menos goles le han marcado//

function stadistics2(equipos) {
    let array_menosGoles = []
    for (let i = 0; i < equipos.length; i++) {
        if(equipos[i].status !== "FINISHED"){
            continue
        }

        let id_equipo_visitante = equipos[i].awayTeam.id
        console.log(id_equipo_visitante)

        let nombre_visitante = equipos[i].awayTeam.name
        console.log(nombre_visitante)

        let goles_marcados_local = equipos[i].score.fullTime.home
        console.log(goles_marcados_local)



        let visitante_encontrado;
        array_menosGoles.forEach(x => {
            if (x.id === id_equipo_visitante) {
                visitante_encontrado = x;
            }
        })
        if (visitante_encontrado == undefined) {
            array_menosGoles.push({
                id: id_equipo_visitante,
                name: nombre_visitante,
                goles: goles_marcados_local,
                matches: 1
            })
        } else {
            visitante_encontrado.goles += goles_marcados_local
            visitante_encontrado.matches++

        }
    }
    console.log(array_menosGoles)
    array_menosGoles.sort((a,b)=> a.goles - b.goles)
    t_stadistics2(array_menosGoles)
}
stadistics2(partidos)


//Tabla ESTADISTICAS--------------//

//LA ARRAY A RECORER ES array_stadistics, los objetos....¡//
function t_stadistics(partido_estadistica) {
    let tabla_stadistics = document.getElementById("tabla_estadistica_partidos")
    let data = partido_estadistica.slice(0, 5)
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")

        let id_equipo_local = document.createElement("p")
        id_equipo_local.innerHTML = data[i].id

        let equipo_local = document.createElement("p")
        equipo_local.innerHTML = data[i].name

        let media = document.createElement("p")
        media.innerHTML = data[i].average.toFixed(2)

        let partido = document.createElement("p")
        partido.innerHTML = data[i].matches

        let img_logo_clubes = document.createElement("img")
        img_logo_clubes.setAttribute("src", "https://crests.football-data.org/" + data[i].id + ".svg")
        img_logo_clubes.classList.add("escudo_local")


        let datos_estadisticos = [img_logo_clubes, equipo_local, media, partido]
        for (let j = 0; j < datos_estadisticos.length; j++) {
            const td = document.createElement("td")
            td.append(datos_estadisticos[j])
            tr.append(td)
        }
        tabla_stadistics.append(tr)
    }
}


//Tabla ESTADISTICAS 2--------------//
function t_stadistics2(partido_estadistica) {
    let tabla_stadistics2 = document.getElementById("tabla_estadistica2_partidos")
    let data = partido_estadistica.slice(0, 5)
    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr")

        let id_equipo_visit = document.createElement("p")
        id_equipo_visit.innerHTML = data[i].id

        let equipo_visit = document.createElement("p")
        equipo_visit.innerHTML = data[i].name

        let goles = document.createElement("p")
        goles.innerHTML = data[i].goles

        let partido = document.createElement("p")
        partido.innerHTML = data[i].matches

        let img_logo_club = document.createElement("img")
        img_logo_club.setAttribute("src", "https://crests.football-data.org/" + data[i].id + ".svg")
        img_logo_club.classList.add("escudo_local")


        let datos_estadisticos2 = [img_logo_club, equipo_visit,goles, partido]
        for (let j = 0; j < datos_estadisticos2.length; j++) {
            const td = document.createElement("td")
            td.append(datos_estadisticos2[j])
            tr.append(td)
        }
        tabla_stadistics2.append(tr)
    }
}


function quitar_spinner(){
    document.getElementById("spinner_loader").style.display="none"
    document.getElementById("dots_spinner").style.visibility="hidden"
}

function mostrar_spinner(){
    document.getElementById("spinner_loader").style.display="block"
    document.getElementById("dots_spinner").style.visibility="visible"

}

function quitar_spinner(){
    document.getElementById("spinner_loader").style.display="none"
    document.getElementById("dots_spinner").style.visibility="hidden"
}

function mostrar_spinner(){
    document.getElementById("spinner_loader").style.display="block"
    document.getElementById("dots_spinner").style.visibility="visible"

}

quitar_spinner()