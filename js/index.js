// Se define una variable MiInicio como una cadena vacía (``). Esta variable se usará para almacenar el contenido HTML que se generará dinámicamente.
let miInicio = ``

//For para traer la información de data y mostrarla como tarjetas
for(let elemento of data){

    //Voy iterando y agregando las tarjetas
   
    miInicio = miInicio +`
    
    
    
    <div class="tarjeta">
        <img src= ${elemento.image} alt="producto">
        <div class="textocard">
            <h2> ${elemento.name} </h2>
            <h3> ${elemento.capitulo} </h3>
            <p> ${elemento.descripcion} </p>

        <!-- Agrego el botón para ir al Juego -->
            <a class="gameButton.primary" href="${elemento.link}" target="_blank">Jugar</a>

            
            
        </div>
    </div>
    
    `
}

// <!-- Agrego el botón para usar LocalStorage -->
//             <button onclick="guardarLocalStorage('${elemento.name}')">Agregar Personaje Favorito</button>

//Selecciono el main y con innerHTML agrego lo que definí en la variable miInicio
document.querySelector(".miInicio").innerHTML=miInicio
