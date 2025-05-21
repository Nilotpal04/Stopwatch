let timer;
let seconds = 0;
let minuntes = 0;
let hours = 0;

const display = document.getElementById("display");
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    const hrs = hours < 10 ? "0" + hours : hours;
    const mins = minuntes < 10 ? "0" + minuntes : minuntes;
    const secs = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${hrs}:${mins}:${secs}`;
}

function startTimer(){
    timer = setInterval(() => {
        seconds++;

        if(seconds === 60) {
            seconds = 0;
            minuntes++;
        }

        if(minuntes === 60){
            minuntes = 0;
            hours++;
        }

    updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minuntes = 0;
    hours = 0;
    updateDisplay();
}

startBtn.addEventListener('click' , startTimer);
stopBtn.addEventListener('click' , stopTimer);
resetBtn.addEventListener('click' , resetTimer);
