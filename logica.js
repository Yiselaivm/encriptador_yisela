condicionesIniciales();

function condicionesIniciales(){
    mostrar( "muneco", true );
    mostrar( "texto-ningun", true );
    mostrar( "textoEncriptado", false );
    mostrar( "boton-copiar", false );
    /*limpiarCaja( "textoUsuario" );*/
}

function condicionesEncriptado(){
    mostrar( "muneco", false );
    mostrar( "texto-ningun", false );
    mostrar( "textoEncriptado", true );
    mostrar( "boton-copiar", true );
    limpiarCaja( "textoUsuario" );
}

function encriptador(){
    let escrito = [];
    let encriptado = [];

    escrito = document.getElementById( "textoUsuario" ).value;

    if( verificarCaracteresEspeciales( escrito ) ){
        encriptado = encriptar( escrito );
        asignarTextoElemento( "textoEncriptado", encriptado );
        condicionesEncriptado();
    } 
    else{
        alert('Solo se admiten letras minúscula y sin acento \nfavor verique que cumpla con lo indicado');
        condicionesIniciales();
    }
}

function desencriptador(){
    let escrito = [];
    let desencriptado = [];

    escrito = document.getElementById( "textoUsuario" ).value;
    desencriptado = desencriptar( escrito );
    asignarTextoElemento( "textoEncriptado", "" );
    asignarTextoElemento( "textoEncriptado", desencriptado );
    condicionesEncriptado();
}

function desencriptar( textoUsuario ){
    let matrizLlaves = [ [ "ufat", "u" ], [ "ai", "a" ], [ "imes", "i" ], [ "ober", "o" ], [ "enter", "e" ] ];

    for( let i = 0; i < matrizLlaves.length; i++ ){

        if( textoUsuario.includes( matrizLlaves[ i ][ 0 ] ) ){
            textoUsuario = textoUsuario.replaceAll( matrizLlaves[ i ][ 0 ], matrizLlaves[ i ][ 1 ] );
        }
    }

    return( textoUsuario );
}

function encriptar( textoUsuario ){
    let matrizLlaves = [ ["e", "i", "a", "o", "u"], ["enter", "imes", "ai", "ober", "ufat"] ];

    for( let i = 0; i < matrizLlaves[ 0 ].length; i++ ){
        if( textoUsuario.includes( matrizLlaves[ 0 ] [ i ] ) ){
            textoUsuario = textoUsuario.replaceAll( matrizLlaves[ 0 ] [ i ], matrizLlaves[ 1 ] [ i ] );
        }
    }

    return( textoUsuario );
}

function mostrar( id, estado ){
    let elemento = false;

    if( estado == false ){
        elemento = document.getElementById(id);
        elemento.style.display = "none";
    }
    else{
        if( estado == true ){
            elemento = document.getElementById(id);
            elemento.style.display = "";
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja( clase ) {
    document.getElementById( clase ).value = '';
}

const copia = document.querySelector(".copiado"); 
    copia.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoEncriptado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
    condicionesIniciales();
});

function verificarCaracteresEspeciales( texto ){
    let verificar = 0;
    let sinTilde = true;

    let caracteresEspeciales = [ "á", "é", "í", "ó", "ú" ];
    
    for( i = 0; i < caracteresEspeciales.length; i++ ){
        if( texto.includes( caracteresEspeciales[ i ] ) ){
            sinTilde = false;
            break;
        }
    }

    if( texto === texto.toLowerCase() && sinTilde ){
        verificar = true;
    }
    else{
        verificar = false;
    }

    return( verificar );
}