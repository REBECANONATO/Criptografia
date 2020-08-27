/* Criptografia de cesar */

// var mensagem, mensagemCodificada = '', cifra;
// mensagem = prompt('Digite sua mensagem');
// cifra = parseInt(prompt('Digite o valor da cifra'));
// for (var i = 0, length = mensagem.length; i < length; i++) {
//   mensagemCodificada += String.fromCharCode(mensagem.charCodeAt(i) + cifra);
// }
// alert(mensagemCodificada);

/*  criptografia simétrica em XOR */

function convert() {
    var output = document.getElementById("ti2");
    var input = document.getElementById("ti1").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
    document.getElementById("ti2").innerHTML = output.value;
    return output.value;
}

function convertChaveCript() {
    var chaveCript = document.getElementById("chave").value;
    var convertChave = (chaveCript >>> 0).toString(2);
    document.getElementById("chaver").innerHTML = convertChave;
    return convertChave;
}

function criptografar() {
   var texto = convert();
   var chave =  convertChaveCript();

   console.log(texto);
   console.log(chave);

    var caracters = texto.split(" ");
    var chaveVetor = chave.split('');
    var criptografado = [];
    caracters.forEach(caracter => {
        var array = caracter.split('');
    
        criptografado.push(xor(array, chaveVetor));
   });
   var newVetor = [];
   criptografado.forEach(crip => {
       newVetor.push(crip.join(""));
    });

    document.getElementById("resultado").innerHTML = newVetor.join(" ");
}

function xor(a, b) {
    var newArray = [];
    for(var i=0; i<a.length; i++){
        if(a[i] != b[i]){
            newArray.push("1");
        } else {
            newArray.push("0");
        }
    }
    return newArray;
}


