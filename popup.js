let timer;
let isRunning = false;
let startTime = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
}

function updateDisplay() {
  const currentTime = Date.now() - startTime;
  display.textContent = formatTime(currentTime);
}

startButton.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - (startTime > 0 ? startTime : 0);
    timer = setInterval(updateDisplay, 10);
    isRunning = true;
  }
});

stopButton.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  startTime = 0;
  display.textContent = "00:00:00";
});
