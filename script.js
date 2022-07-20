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


    