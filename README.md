# Título del Proyecto

_Web page de LaLiga_

## Descripción 🚀

_Proyecto 2 del Bootcamp, creación de una página web donde el usuario puede consultar y acceder a resultados, clasificación y estadísticas de la Liga Española de ⚽._

_Se facilita el acceso a las webs oficiales de los distintos clubes que conforman dicha Liga, así como una visualización sobre noticias y publicaciones relacionadas con el fútbol._

_Se han añadido enlaces directos donde poder consultar la Premier League(liga inglesa) y las principales plataformas donde ver LaLiga._


### Funcionalidades 📋

- Acceso a las páginas oficiales de los clubes que forman **LaLiga**.
- Acceso a la web oficial de la **Premier League**.
- Acceso directo a las plataformas de emisión de **LaLiga**.
- Acceso a la clasificación general de los equipos.
- Acceso a los resultados de todos los partidos de **LaLiga**. Pudiendo aplicar filtros en base al equipo, y los resultados del mismo: ganados, empatados o derrotas.
- Acceso a tablas estadísticas; top 5 clubes mayor media de goles por partido y top 5 clubes con menos goles en contra jugando como visitante.
```

### Tecnologías empleadas 🔧

- **HTML5** : esquema de distribución de la página.
- **CSS3** : diseño de la interfaz.
- **Bootstrap** : diseño de la interfaz y implementación de características *responsive* , mejorando la experiencia en cualquier dispositivo.
- **JavaScript** : funcionalidad y dinamismo de la página.
- **Postman** : API Platform ,obtención de datos (utilizada inicialmente,hasta desarrollo de fetch() en los todos archivos JS).
- **Git** y **GitHub** : control de versiones y repositorio en remoto.



## Descripción Técnica ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Funciones genéricas 🔩

- `getFetch()` empleada en los archivos JS, función encargada de obtener los datos en tiempo real de la API, sin necesidad de emplear POSTMAN.
-`datos_partidos()` función empleada para crear la tabla con los equipos, sobre esta función se desarrollarán funciones específicas para crear los filtros de búsqueda.
-`quitar_spinner()` presenten en todos los archivos JavaScript, donde se obtenien los datos de la API, permitiendo esconde el spinner despúes de recibir dichos datos.
-`clasificaciones()` función que desarrolla la tabla de clasificación de los euipos de **LaLiga**, mostrando datos como: posición, nombre del club, partidos jugados, partidos ganados, partidos empatados o perdidos, goles marcados, goles recibidos, diferencia de goles, puntos y jornada. Esta función es reutilizable para extraer datos de otras ligas.

```
Da un ejemplo
```

### Funciones específicas ⌨️

-`filtroEquipo()` función que desarrolla 2 pasos:
    -Inicialmente filtra los equipos en base al input introducido por el usuario.
    -Realiza un nuevo filtro sobre la array creada con los nombres de los equipos en base al parámetro pedido por el usua

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️


* Visual Studio Code (VSC)
* Google Chrome
* PostMan

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Dona con cripto a esta dirección: `0xf253fc233333078436d111175e5a76a649890000`
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊
