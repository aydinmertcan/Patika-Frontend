// Get name and print it.
let name = prompt("Lütfen isminizi giriniz.", )
document.getElementById("myName").innerHTML = name;

// Update time everysecond.
setInterval(function getDate () {
    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi','Pazar'];
    let daysStr = days[new Date().getDay() - 1];

    let hours = new Date().getHours().toString();
    if (hours < 10 && hours >= 0){
        hours = '0'+ hours;
    }
    let minutes = new Date().getMinutes().toString();
    if (minutes < 10 && minutes >= 0){
        minutes = '0'+ minutes;
    }
    let seconds = new Date().getSeconds().toString();
    if (seconds < 10 && seconds >= 0){
        seconds = '0'+ seconds;
    }

    return document.getElementById("myClock").innerHTML = ( hours + ":"+  minutes + ":" + seconds + " " + daysStr)
},1);


