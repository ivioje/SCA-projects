currentTime = () => {
    let hours = document.getElementById("hour");
    let Minutes = document.getElementById("Minutes");
    let seconds = document.getElementById("seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hours.innerHTML = h;
    Minutes.innerHTML = m;
    seconds.innerHTML = s;
}

let interval = setInterval(currentTime, 1000);