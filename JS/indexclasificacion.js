let equipos_clasificacion = clasificacion.standings[0].table


clasificaciones(equipos_clasificacion)
//Datos de clasificacion

// console.log(clasificacion.standings[0].table)

//equipo
// console.log(clasificacion.standings[0].table[0].team.shortName)

//posicion clasificacion
// console.log(clasificacion.standings[0].table[0].position)

//partidos jugados
// console.log(clasificacion.standings[0].table[0].playedGames)

//form iconos ultimos 5
// console.log(clasificacion.standings[0].table[0].form)

//victorias
// console.log(clasificacion.standings[0].table[0].won)

//derrotas
// console.log(clasificacion.standings[0].table[0].lost)

//empates
// console.log(clasificacion.standings[0].table[0].draw)

//goles fuera
// console.log(clasificacion.standings[0].table[0].goalsFor)

//goles en contra
// console.log(clasificacion.standings[0].table[0].goalsAgainst)

//diferencia de goles
// console.log(clasificacion.standings[0].table[0].goalDifference)

//puntos
// console.log(clasificacion.standings[0].table[0].points)




function clasificaciones(datos){
    let tabla_clasificacion = document.getElementById("t_clasificacion")
    for (let i = 0; i< datos.length; i++) {
        const tr = document.createElement("tr")
        let nombre_equipo = datos[i].team.name
        nombre_equipo.innerHTML =datos[i].team.name
        
        let posicion = document.createElement("p")
        posicion.innerHTML = datos[i].position
        
        let partidos_jugados = document.createElement("p")
        partidos_jugados.innerHTML = datos[i].playedGames
        
        let ultimos = datos[i].form
        // ultimos.innerHTML = datos[i].form;
        ultimos=ultimos.replace(/W/g,"✔️")
        ultimos=ultimos.replace(/L/g,"❌")
        ultimos=ultimos.replace(/D/g,"➖")
        
        let perdidos = document.createElement("p")
        perdidos.innerHTML =  datos[i].lost
        
        let empates = document.createElement("p")
        empates.innerHTML = datos[i].draw
        
        let victorias = document.createElement("p")
        victorias.innerHTML = datos[i].won
        
        let goles = document.createElement("p")
        goles.innerHTML = datos[i].goalsFor
        
        let goles_contra = document.createElement("p")
        goles_contra.innerHTML = datos[i].goalsAgainst
        
        let diferencia_goles = document.createElement("p")
        diferencia_goles.innerHTML = datos[i].goalDifference
        
        let puntos = document.createElement("p")
        puntos.innerHTML = datos[i].points

        let escudo = document.createElement("img")
        escudo.setAttribute("src",datos[i].team.crest)
        escudo.classList.add("escudo")

        let clasi = [posicion,escudo,nombre_equipo,partidos_jugados,victorias,empates,perdidos,goles,goles_contra,diferencia_goles,puntos,ultimos]
        for (let j = 0; j < clasi.length; j++) {
            const td = document.createElement("td")
            td.append(clasi[j])
            tr.append(td)
        }
    tabla_clasificacion.append(tr)  
    }
}
