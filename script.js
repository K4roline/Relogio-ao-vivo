function relogio() {
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    hora = (hora < 10) ? "0" + hora : hora
    minutos = (minutos < 10) ? "0" + minutos : minutos
    segundos = (segundos < 10) ? "0" + segundos : segundos
    
    var tempo = hora + ":" + minutos + ":" + segundos

    tempo.innerHTMl = tempo

    document.getElementById("relogio").value = tempo
}

function carregarimagem() {

    var img = window.document.getElementById('imagemdia')

    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        img.setAttribute("src", "manha.jpg")
    } else if (hora >= 12 && hora <= 18) {
        img.setAttribute("src", "tarde.jpg")
    } else {
        img.setAttribute("src", "noite.jpg")
    }
}

function inicio() {
    relogio()
    carregarimagem()
}