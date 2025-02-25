var targetDate = new Date("August 29, 2025 00:00:00").getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = targetDate - now;


    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " days " + hours + " hours " + minutes + " minutes " + seconds + "s";
    
    if (timeLeft > 0) 
    {
        setTimeout(updateCountdown, 1000);
    }
    else
    {
        document.getElementById("countdown").innerHTML = "Move-In Day!"
    }
}

window.onload = updateCountdown;
