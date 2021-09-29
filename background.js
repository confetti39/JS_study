const images = [
    "5.png","6.png","7.png","8.png"
];


const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);

//랜덤으로 배경이미지 설정
const obj = document.querySelector("body");
obj.style.backgroundImage = `url(${bgImage.src})`;
