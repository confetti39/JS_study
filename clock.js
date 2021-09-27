const clock = document.querySelector("h2#clock");
const date = document.querySelector("h2#date");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
function getDate(){
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth());
    const days = String(date.getDay());
    date.innerText = `${years}년 ${months}월 ${days}일`;
}

//setInterval(sayHello, 5000); //5초마다 실행
//setTimeout(sayHello, 5000); //5초 후 실행

getDate();
getClock(); //html이 실행되자마자 clock이 나오게 하려고
setInterval(getClock, 1000);
setInterval(getDate, 1000);