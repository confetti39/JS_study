const clock = document.querySelector("h2#clock");
const date = document.querySelector("h2#date");

function getClock(){
    const date1 = new Date();
    const hours = String(date1.getHours()).padStart(2, "0");
    const minutes = String(date1.getMinutes()).padStart(2, "0");
    const seconds = String(date1.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
function getDate(){
    const date2 = new Date();
    const years = String(date2.getFullYear());
    const months = String(date2.getMonth());
    const days = String(date2.getDay());
    date.innerText = `${years}.${months}.${days}`;
}

//setInterval(sayHello, 5000); //5초마다 실행
//setTimeout(sayHello, 5000); //5초 후 실행

getDate();
getClock(); //html이 실행되자마자 clock이 나오게 하려고
setInterval(getClock, 1000);
setInterval(getDate, 1000);