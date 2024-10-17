document.addEventListener("DOMContentLoaded", function () {
    var countS = 25;
    document.getElementById("session").innerHTML = countS;
    var countB = 5;
    document.getElementById("break").innerHTML = countB;
    var pos = "pomodoro";
    var intervalId = null;
    var remainingTime = 0;
    var isRunning = false;

    document.getElementById("stats").innerHTML = pos;

    // Function to start the timer
    function startTimer(duration, callback) {
        remainingTime = duration;
        intervalId = setInterval(function () {
            remainingTime--;
            updateTimerDisplay(remainingTime);
            if (remainingTime <= 0) {
                clearInterval(intervalId);
                callback();
            }
        }, 1000);
    }

    // Function to update the timer display
    function updateTimerDisplay(seconds) {
        var minutes = Math.floor(seconds / 60);
        var secs = seconds % 60;
        document.querySelector(".timer").innerHTML =
            ("0" + minutes).slice(-2) + ":" + ("0" + secs).slice(-2);
    }

    // Switch between session and break
    function switchTimer() {
        if (pos === "session") {
            pos = "break";
            startTimer(countB * 60, switchTimer);
        } else {
            pos = "session";
            startTimer(countS * 60, switchTimer);
        }
        document.getElementById("stats").innerHTML = pos;
    }

    // SESSION Increment
    document.getElementById("sessInc").addEventListener("click", function () {
        if (parseInt(document.getElementById("session").innerHTML) > 0) {
            countS = parseInt(document.getElementById("session").innerHTML);
            countS += 1;
            document.getElementById("session").innerHTML = countS;
        }
    });

    // SESSION Decrement
    document.getElementById("sessDec").addEventListener("click", function () {
        if (parseInt(document.getElementById("session").innerHTML) > 1) {
            countS = parseInt(document.getElementById("session").innerHTML);
            countS -= 1;
            document.getElementById("session").innerHTML = countS;
        }
    });

    // BREAK Increment
    document.getElementById("breakInc").addEventListener("click", function () {
        if (parseInt(document.getElementById("break").innerHTML) > 0) {
            countB = parseInt(document.getElementById("break").innerHTML);
            countB += 1;
            document.getElementById("break").innerHTML = countB;
        }
    });

    // BREAK Decrement
    document.getElementById("breakDec").addEventListener("click", function () {
        if (parseInt(document.getElementById("break").innerHTML) > 1) {
            countB = parseInt(document.getElementById("break").innerHTML);
            countB -= 1;
            document.getElementById("break").innerHTML = countB;
        }
    });

    // START Timer
    document.getElementById("start").addEventListener("click", function () {
        if (!isRunning) {
            isRunning = true;
            pos = "session";
            document.getElementById("stats").innerHTML = pos;
            startTimer(countS * 60, switchTimer);
        }
    });

    // STOP Timer
    document.getElementById("stop").addEventListener("click", function () {
        if (isRunning) {
            clearInterval(intervalId);
            isRunning = false;
        }
    });

    // CLEAR Timer
    document.getElementById("clear").addEventListener("click", function () {
        clearInterval(intervalId);
        isRunning = false;
        pos = "pomodoro";
        document.getElementById("stats").innerHTML = pos;
        updateTimerDisplay(0);
    });

    // Initialize timer display
    updateTimerDisplay(0);
});
