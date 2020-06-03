function clockTime() {

    var currentTime = new Date();
    var listDays = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
    var currentDiaSem = listDays[currentTime.getDay()];
    var currentDia = currentTime.getDate();
    var listMonths = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", " agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    var currentMonth = listMonths[currentTime.getMonth()];
    var currentYear = currentTime.getFullYear();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    var curTimeString = "Hoy dia es " + currentDiaSem + " " + currentDia + " de " + currentMonth + " de " + currentYear + ", y son las " +
        currentHours + " horas, " + currentMinutes + " minutos con " + currentSeconds + " segundos.";
    var countdownstring = "Faltan " + countdownClock().days + " dias, " + countdownClock().hours + " horas, " + countdownClock().minutes +
     " segundos y " + countdownClock().seconds + " segundos, para el fin del mundo..."

    // document.getElementById("horas").firstChild.nodeValue = curTimeString;
    document.getElementById("time").innerHTML = curTimeString;
    document.getElementById("countd").innerHTML = countdownstring;

}

function countdownClock() {
    const deadline = "December 31 2020 23:59:59";
    var total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };

}

