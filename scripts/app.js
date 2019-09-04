var end = new Date().getTime() + (1000 * 20);

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = end - now;
    // Output the result in an element "Timer"
    document.getElementById("timer").innerHTML = distance / 1000;

    // If the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "SLUT!";
    }
}, 1000);