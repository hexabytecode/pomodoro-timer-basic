let timer = document.getElementById("timer");

function handleStart() {
  let time = 25 * 60;

  const interval = setInterval(() => {
    /**
     * define minutes - time/60
     * define seconds - time%60
     * check if minutes < 0
     *  yes -> clearInterval + alert
     *  no -> update innerHTML of timer
     */
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (time < 0) {
      clearInterval(interval);
      alert("Time's Up");
      timer.innerText = "25:00";
    } else {
      timer.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      time--;
    }
  }, 1000);
}

document.getElementById("startBtn").addEventListener("click", handleStart);
