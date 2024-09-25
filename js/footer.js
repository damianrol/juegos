//Me creo la variable miFooter y pegamos el código que tenemos en el HTML

let miFooter=`
<img src="./imagenes/logo-SmartTeam+bajada-alta.png" alt="logo" width=58>
<p>® 2024 , SmartTEAM</p>
`

//Selecciono el footer y con innerHTML agrego lo que definí en la variable miFooter
document.querySelector("footer").innerHTML=miFooter
