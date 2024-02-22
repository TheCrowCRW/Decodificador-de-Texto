let matriz_crip = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

let matriz_desc = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"]
] 


function ocultarImagem() {
    document.querySelector('.img-btn').style.display = 'none';
}

function exibirImagem() {
    document.querySelector('.img-btn').style.display = 'block';
}

function criptografar(stringC) {
    
    for (let i = 0; i < matriz_crip.length; i++) {
        if (stringC.includes(matriz_crip[i][0])) {
            stringC = stringC.replaceAll(matriz_crip[i][0], matriz_crip[i][1]);
        }
    }
    
    return stringC;
}

function showCripto() {
    let input = document.getElementById("text-input").value;
    let res = criptografar(input);
    document.getElementById("div-msg").value = res;
    ocultarImagem();
}

function descriptografar(stringD) {

    for (let i = 0; i < matriz_desc.length; i++) {
        if (stringD.includes(matriz_desc[i][0])) {
            stringD = stringD.replaceAll(matriz_desc[i][0], matriz_desc[i][1]);
        }
    }
    return stringD
}

function showDescripto() {
    let input = document.getElementById("text-input").value;
    let res = descriptografar(input);
    document.getElementById("div-msg").value = res;
    ocultarImagem();
}

function copiarTexto() {
    var textarea = document.getElementById("div-msg");

    try {
        navigator.clipboard.writeText(textarea.value)
            .then(() => {
                alert('Texto Copiado!');
            })
            .catch((error) => {
                console.error('Falha ao copiar texto:', error);
            });
    } catch (error) {
        console.error('Falha no Clipboard:', error);
    }
}


