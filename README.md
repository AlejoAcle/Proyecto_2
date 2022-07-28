# Título del Proyecto

_Web page de **LaLiga**_
<p align="center">
    <img src="https://github.com/AlejoAcle/Proyecto_2/blob/master/images/laliga-h-600x600.png" alt="img LaLiga" widht="300px" height="300px">
</p>

## Descripción 🚀

_Proyecto 2 del Bootcamp **FullStack**_, creación de una página web donde el usuario puede consultar y acceder a resultados, clasificación y estadísticas de la Liga Española de ⚽.

Se facilita el acceso a las webs oficiales de los distintos clubes que conforman dicha Liga, así como una visualización sobre noticias y publicaciones relacionadas con el fútbol.

Se han añadido enlaces directos donde poder consultar la Premier League(liga inglesa) y las principales plataformas donde ver LaLiga.


### Funcionalidades 📋

- Acceso a las páginas oficiales de los clubes que forman **LaLiga**.
- Acceso a la web oficial de la **Premier League**.
- Acceso directo a las plataformas de emisión de **LaLiga**.
- Acceso a la clasificación general de los equipos.
- Acceso a los resultados de todos los partidos de **LaLiga**. Pudiendo aplicar filtros en base al equipo, y los resultados del mismo: ganados, empatados o derrotas.
- Acceso a tablas estadísticas; top 5 clubes mayor media de goles por partido y top 5 clubes con menos goles en contra jugando como visitante.


### Tecnologías empleadas 🔧

- **HTML5** : esquema de distribución de la página.
- **CSS3** : diseño de la interfaz.
- **Bootstrap** : diseño de la interfaz y implementación de características *responsive* , mejorando la experiencia en cualquier dispositivo.
- **JavaScript** : funcionalidad y dinamismo de la página.
- **Postman** : API Platform ,obtención de datos (utilizada inicialmente,hasta desarrollo de fetch() en los todos archivos JS).
- **Git** y **GitHub** : control de versiones y repositorio en remoto.



## Descripción Técnica ⚙️

Descripción de las funcionalidades aplicadas.

### Funciones genéricas 🔩

- `getFetch()` empleada en los archivos JS, función encargada de obtener los datos en tiempo real de la API, sin necesidad de emplear POSTMAN.
-`datos_partidos()` función empleada para crear la tabla con los equipos, sobre esta función se desarrollarán funciones específicas para crear los filtros de búsqueda.
-`quitar_spinner()` presenten en todos los archivos JavaScript, donde se obtenien los datos de la API, permitiendo esconde el spinner despúes de recibir dichos datos.
-`clasificaciones()` función que desarrolla la tabla de clasificación de los euipos de **LaLiga**, mostrando datos como: posición, nombre del club, partidos jugados, partidos ganados, partidos empatados o perdidos, goles marcados, goles recibidos, diferencia de goles, puntos y jornada. Esta función es reutilizable para extraer datos de otras ligas.


### Funciones específicas ⌨️

- `filtroEquipo()` función que desarrolla 2 pasos:
    -Inicialmente filtra los equipos en base al input introducido por el usuario.
    -Realiza un nuevo filtro sobre la array creada con los nombres de los equipos en base al parámetro pedido por el usuario (resultados).
- `reseteo_filtro()` permite resetear todos los filtros, desde el campo de input como los botones para resultados, permitiendo al usuario introducir una nueva búsqueda.
- `stadistics()` y `t_stadistics()` funciones encargadas de crear la tabla y filtrar los 5 equipos con mayor media de goles a favor por partido.
- `stadistics2()` y `t_stadistics2()` funciones que permiten crear la tabla y filtrar los 5 equipos con menos goles en contra como visitante.
- `datos_clubes()` función para recorrer la array y extraer las imagenes correspondientes a cada club, para posteriormente crear accesos directos a la página oficial de cada uno.


## Construido con 🛠️

* Visual Studio Code (VSC)
* Google Chrome
* PostMan


## Versiones 📌

v1.0(29.07.2022) - Presentación proyecto


## Autores ✒️

* **Alejo** - *Trabajo Inicial* - [Alejo](https://github.com/AlejoAcle)
* **Alexandra** - *Mentora y soporte* - 


## To-Do ✅

- Mejora del diseño
- Filtro búsqueda activo ( ir filtrando al introducir caracteres)
- Resultados Premier League, y liga femenina.
- Estadísticas de Premier League y liga femenina .





[Alejo](https://github.com/AlejoAcle) 🦖​
