const images = ["1.jpg", "2.jpg", "3.jpg"];
const worldImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("style");

bgImage.innerText = `body{background-image: url(img/${worldImage})};background-size: cover;
background-repeat: no-repeat;
background-position: center;`;
bgImage.src = `img/${worldImage}`;

document.head.appendChild(bgImage);

// 정리
// 변수를 생성하는 과정에서는 img파일에 접근하지 않음
// bgImage.src 부분에서 img/을 통해 image폴더에 접근하는 것
// prepend(): body 맨 처음에 추가
// appendChild(): body 맨 끝에 html을 추가하는 역할
// append(): 위와 비슷하지만 여러개 추가 가능, 최신 브라우저만 호환.

// --------------------------------------------------------------------------------------------------
// createElement에 style을 줘서 배경화면으로 입혀봄

// const images = ["1.jpg", "2.jpg", "3.jpg"];
// const worldImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("style");

// bgImage.innerText = `body{background-image: url(img/${worldImage});`;
// bgImage.src = `img/${worldImage}`;

// document.head.appendChild(bgImage);
