function relogio() {
    var Data = new Date()
    var hora = Data.getHours()
    var minutos = Data.getMinutes()
    var segundos = Data.getSeconds()

    hora = (hora < 10) ? "0" + hora : hora
    minutos = (minutos < 10) ? "0" + minutos : minutos
    segundos = (segundos < 10) ? "0" + segundos : segundos
    
    var tempo = hora + ":" + minutos + ":" + segundos

    tempo.innerHTMl = tempo

    document.getElementById("relogio").value = tempo
}
    setInterval(relogio, 500)

function carregarimagem() {
    var img = window.document.getElementById('imagemdia')    
    var img = window.document.getElementById('imagemtarde')   
    var img = window.document.getElementById('imagemnoite')   

    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="manha.jpg">'
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="tarde.jpg">'
    } else {
        img.innerHTML = '<img src="noite.jpg">'
    }

}


// if (hora >= 0 && hora < 12) {
//     img.scr = 'manha.jpg'
// } else if (hora >= 12 && hora <= 18) {
//     img.scr = 'tarde.jpg'
// } else {
//     img.scr = 'noite.jpg'
// }