const button = document.querySelector(".button");
button.addEventListener("click", capitalFirstLetter);
button.addEventListener("click", getMessage);

let date = new Date();
const correctDate = date.toLocaleString("ru-RU");

function capitalFirstLetter() {
  const enterName = document.querySelector(".input__text").value;
  const correctName =
    enterName.substr(0, 1).toUpperCase() + enterName.slice(1).toLowerCase();
  correctName.trim(correctName);
  // document.querySelector(".chat__output_init").innerHTML = correctName;
  document.querySelector(".chat__output_date").innerHTML = correctDate;
  const checkYes = document.querySelector(".main__checkbox1");
  if (checkYes.checked) {
    document.querySelector(".chat__output_init").innerHTML = correctName;
  } else {
    document.querySelector(".chat__output_init").innerHTML = "username";
  }
}

function getMessage() {
  let enterMsg = document.querySelector(".chat__message").value;
  enterMsg = enterMsg.replace(/viagra/gi, "***");
  enterMsg = enterMsg.replace(/XXX/gi, "***");
  let outMsg = (document.querySelector(".chat__output_msg").innerHTML =
    enterMsg);
  const enterLink = document.querySelector(".input__link").value;
  const imgOut = document.querySelector(".chat__output_img");
  imgOut.src = enterLink;
  if (enterLink == "") {
    const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    const imgOut = document.querySelector(".chat__output_img");
    imgOut.src = imgs[Math.floor(Math.random() * imgs.length)];
  }
}

/*----левое------------------------- */
// let big = enterName.replace(/\b[a-z](?=[a-z]{2})/gi);
// console.log(big);
