const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();
  clock.innerText = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}

function pad(num) {
  // format 1 => 01
  return num.toString().padStart(2, "0");
}

getClock();
setInterval(getClock, 1_000);
