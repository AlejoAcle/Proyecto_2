//fecha cuando se jugó
//equipo visitante - equipo local
// nº jornada
//resultado
let partidos = matches.matches


datos_partidos(partidos)


console.log(matches.matches)
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

function datos_partidos(data){
    let tabla_partidos = document.getElementById("t_partidos")
    for (let i = 0; i < data.length; i++){
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
        let resultado_visitante = document.createElement("p")
        resultado_visitante.innerHTML = data[i].score.fullTime.away
        let resultado_local = document.createElement("p")
        resultado_local = data[i].score.fullTime.home
        let escudo_local = document.createElement("img")
        escudo_local.setAttribute("src",data[i].homeTeam.crest)
        escudo_local.classList.add("escudo_local")

        let escudo_visitante = document.createElement("img")
        escudo_visitante.setAttribute("src",data[i].awayTeam.crest)
        escudo_visitante.classList.add("escudo_visitante")
        

        let partidos = [jornada,visitante,escudo_visitante,resultado_visitante,resultado_local,escudo_local,local,fecha.toLocaleString()]
        for (let j = 0; j < partidos.length; j++) {
            const td = document.createElement("td")
            td.append(partidos[j])
            tr.append(td)  
        }
    tabla_partidos.append(tr)
    }
}