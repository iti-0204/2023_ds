let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isTimerRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const alarmSound = document.getElementById('alarm-sound');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        stopButton.disabled = false;

        timerInterval = setInterval(updateTimer, 1000);
        timerDisplay.classList.add('animated');
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;

        clearInterval(timerInterval);
        timerDisplay.classList.remove('animated');
    }
}

function stopTimer() {
    isTimerRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    stopButton.disabled = true;

    clearInterval(timerInterval);
    timerDisplay.classList.remove('animated');
    resetTimer();
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    timerDisplay.classList.remove('animated');
}

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
    timerDisplay.classList.add('animated');
}

function updateDisplay() {
    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);

    timerDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padZero(value) {
    return value.toString().padStart(2, '0');
}

