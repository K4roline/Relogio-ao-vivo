function mostrarrelogio() {
    var data = new Date()
    var data = date.getHours()
    var data = date.getMinutes()
    var data = date.getSeconds()
    var sessao = "AM"

    if (hora == 0) {
        hora = 12
    }

    if (hora > 12) {
        hora = hora - 12; 
        sessao = "PM"
    }

    hora = (hora < 10) ? "0" + hora : hora;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    var time = hora + ":" + minutos + ":" + segundos + " " + sessao;
    document.getElementById("relogio").innerHTML = time;
    document.getElementById("relogio").textContent = time;

    setTimeout(mostrartempo, 1000);
    
}

mostrarrelogio()