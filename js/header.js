//Me creo la variable miHeader y pegamos el código que tenemos en el HTML

//las backticks ` se utilizan para crear "template strings"
//son strings especiales que permiten la interpolación de variables y expresiones dentro de una cadena de texto.
//permiten utilizar la inserción de datos utilizando la sintaxis ${variable}
    
let miHeader=`
    <img src="./imagenes/logo-SmartTeam+bajada-alta.png" alt="logo" width=100>
    <h1>Libro 1</h1>
   
`

//Selecciono el header y con innerHTML agrego lo que definí en la variable miHeader
document.querySelector("header").innerHTML=miHeader

// <nav>
// <a class="aheader" href="index.html">Inicio</a>
// <a class="aheader" href="nosotros.html">Nosotros</a>
// <a class="aheader" href="sucursales.html">Sucursales</a>
// <a class="aheader" href="#contacto">Contacto</a>
// </nav>