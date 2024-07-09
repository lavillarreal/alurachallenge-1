function encriptarTexto(){
    var imput_text = document.getElementById("imput");
    if(imput_text.value == ""){
        alert("Ingrese un texto a encriptar");
        imput_text.value="Ingrese su texto";
        imput_text.style.color="rebeccapurple";
    }
    else{
        var encripted_text = imput_text.value.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");
        //  lo de arriba es equivalente a :
        //  var encripted_text = imput_text.replace(/e/g, "enter");
        //  encripted_text = encripted_text.replace(/i/g, "imes")
        //  encripted_text = encripted_text.replace(/a/g, "ai")
        //  encripted_text = encripted_text.replace(/o/g, "ober")
        //  encripted_text = encripted_text.replace(/u/g, "ufat")
        //
        // alert("Texto original: " + imput_text + "\n" +
        //     "Texto encriptado: " + encripted_text);
        document.getElementById("output").value = encripted_text;
        document.getElementById("outputLabel").innerText = "Encriptado: ";
        if (document.body.clientWidth <= 1200) {
            document.getElementById("result-section").scrollIntoView({behavior: 'smooth'});
        }
    }
}


function borrarTexto(){
    var imput = document.getElementById("imput");
    if(imput.value == "Ingrese su texto"){
        imput.value="";
        imput.style.color="dimgray";
    }
}


function desencriptarTexto(){
    var imput_text = document.getElementById("imput").value;
    if(imput_text == ""){
        alert("Ingrese un texto a desencriptar");
        document.getElementById("imput").value="Ingrese su texto"
    }
    else{
        var decrypted_text = imput_text.replace(/enter/g, "e");
        decrypted_text = decrypted_text.replace(/imes/g, "i");
        decrypted_text = decrypted_text.replace(/ai/g, "a");
        decrypted_text = decrypted_text.replace(/ober/g, "o");
        decrypted_text = decrypted_text.replace(/ufat/g, "u");
        document.getElementById("output").value = decrypted_text;
        document.getElementById("outputLabel").innerText = "Traduccion: ";
        if (document.body.clientWidth <= 1200) {
            document.getElementById("result-section").scrollIntoView({behavior: 'smooth'});
        }
    }
}


function copyText(){

    var imput_text = document.getElementById("imput").value;
    if(imput_text == ""){
        alert("Nada que copiar");
    }
    else{
        var text_to_copy = document.getElementById("output");
        text_to_copy.select();
        text_to_copy.setSelectionRange(0, 9999999999);
        navigator.clipboard.writeText(text_to_copy.value);
        alert("Texto copiado al portapapeles");
    }
}


//Writted by Lourdes Villarreal