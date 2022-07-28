let equipo = equipos.teams

datos_clubes(equipo)

function datos_clubes(data){
    let clubes = document.getElementById("contenedorLogos")
    for (let i = 0; i < data.length; i++) {
        let link = document.createElement("a")
        link.href = data[i].website
        link.setAttribute("target","_blank")
        let caja_equipo = document.createElement("div")
        caja_equipo.classList.add("logo")
        let logo = document.createElement("img")
        logo.classList.add("logo")
        logo.setAttribute("src", data[i].crestUrl)

        caja_equipo.append(logo)
        link.append(caja_equipo)
        clubes.append(link)        
    }
}