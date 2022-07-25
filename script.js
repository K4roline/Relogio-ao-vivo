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
    var img = window.document.getElementById(`iamgemnoite`)   

    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        // img.scr = 'dia.jpg'
        '<img id= imagemdia>'
    } else if (hora >= 12 && hora <= 18) {
        '<img id= imagemtarde>'
    } else {
        '<img id= imagemnoite>'
    }

}

carregarimagem()

