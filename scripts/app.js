var end = new Date().getTime() + (1000 * 20);

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = end - now;
    // Output the result in an element "Timer"
    document.getElementById("timer").innerHTML = distance / 100;

    // If the count down is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "SLUT!";
        document.getElementById("word1").innerHTML = "Base!";
        document.getElementById("word2").innerHTML = "Base!";
        document.getElementById("word3").innerHTML = "BASS!";
        document.getElementById("word4").innerHTML = "BESS!";
        document.getElementById("word5").innerHTML = "BOZE!";
        document.getElementById("word6").innerHTML = "ESAB!";
    }
}, 100);