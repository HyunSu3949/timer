const hour = document.querySelector(".hour input");
const min = document.querySelector(".min input");
const sec = document.querySelector(".sec input");

const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

start.addEventListener("click", init);
reset.addEventListener("click", resetTimer);
let id = 0;

function resetTimer() {
  clearInterval(id);
  hour.value = "00";
  min.value = "00";
  sec.value = "00";
  start.textContent = "start";
}
function init() {
  if (start.textContent == "start") {
    start.textContent = "pause";
    setTimer();
    id = setInterval(setTimer, 1000);
  } else {
    start.textContent = "start";
    clearInterval(id);
  }
}

function setTimer() {
  let h = +hour.value;
  let m = +min.value;
  let s = +sec.value;

  let totalsec = h * 3600 + m * 60 + s;

  totalsec--;

  hour.value = Math.floor(totalsec / 3600)
    .toString()
    .padStart(2, "0");
  totalsec = totalsec - 3600 * +hour.value;
  min.value = Math.floor(totalsec / 60)
    .toString()
    .padStart(2, "0");
  totalsec = totalsec - 60 * +min.value;
  sec.value = totalsec.toString().padStart(2, "0");

  if (hour.value == 0 && min.value == 0 && sec.value == 0) {
    clearInterval(id);
    start.textContent = "start";
  }
}
