function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#output-texto").value = textoCifrado;
    document.querySelector("#input-texto").value;
    if(texto!=""){
        document.getElementById("mostrarResultado").style.display = "block";
        document.getElementById("textoPrevio").style.display = "none";
    }
    else{
        document.getElementById("mostrarResultado").style.display = "none";
        document.getElementById("textoPrevio").style.display = "block";
    }
    
    }
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#output-texto").value = textoCifrado; 
    document.querySelector("#input-texto").value;
    if(texto!=""){
        document.getElementById("mostrarResultado").style.display = "block";
        document.getElementById("textoPrevio").style.display = "none";
    }
    else{
        document.getElementById("mostrarResultado").style.display = "none";
        document.getElementById("textoPrevio").style.display = "block";
    }
    
}
var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copiar(){
    var codigoACopiar = document.querySelector("#output-texto").value;
    navigator.clipboard.writeText(codigoACopiar);
}
var boton3 = document.querySelector("#btn-copy"); boton3.onclick = copiar;

function SoloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
    }
}
