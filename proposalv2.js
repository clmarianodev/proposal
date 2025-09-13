const comeback = document.getElementById("btn2");
const yes = document.getElementById("btn1");

// group 1
const btt1 = document.getElementById("btt1");
const btt2 = document.getElementById("btt2");
const btt3 = document.getElementById("btt3");
const btt4 = document.getElementById("btt4");
const btt5 = document.getElementById("btt5");
const btt6 = document.getElementById("btt6");
const btt7 = document.getElementById("btt7");

// group 2
const bbtt1 = document.getElementById("bbtt1");
const bbtt2 = document.getElementById("bbtt2");
const bbtt3 = document.getElementById("bbtt3");
const bbtt4 = document.getElementById("bbtt4");
const bbtt5 = document.getElementById("bbtt5");
const bbtt6 = document.getElementById("bbtt6");
const bbtt7 = document.getElementById("bbtt7");

// media / images
const hands = document.getElementById("hands");
const sadcat = document.getElementById("sadcat");
const crying = document.getElementById("crying");
const sadboi = document.getElementById("sadboi");
const sadman = document.getElementById("sadman");
const hahahuhu = document.getElementById("hahahuhu");
const hang = document.getElementById("hang");
const sadsad = document.getElementById("sadsad");
const cryingruru = document.getElementById("cryingruru");

// flow
comeback.addEventListener("click", () => {
  comeback.style.opacity = "0";
  btt7.style.opacity = "1";
});

btt7.addEventListener("click", () => {
  btt7.style.opacity = "0";
  bbtt3.style.opacity = "1";
  hands.style.opacity = "1";
});

bbtt3.addEventListener("click", () => {
  bbtt3.style.opacity = "0";
  btt1.style.opacity = "1";

  // show & play coma.mp4
  sadcat.style.opacity = "1";
  sadcat.play();
});

btt1.addEventListener("click", () => {
  btt1.style.opacity = "0";
  btt4.style.opacity = "1";
  hahahuhu.style.opacity = "1";
});

btt4.addEventListener("click", () => {
  btt4.style.opacity = "0";
  btt2.style.opacity = "1";
  sadboi.style.opacity = "1";
});

btt2.addEventListener("click", () => {
  btt2.style.opacity = "0";
  bbtt1.style.opacity = "1";
  crying.style.opacity = "1";
  yes.style.padding = "50px";
});

bbtt1.addEventListener("click", () => {
  bbtt1.style.opacity = "0";
  bbtt6.style.opacity = "1";
  sadman.style.opacity = "1";
});

bbtt6.addEventListener("click", () => {
  bbtt6.style.opacity = "0";
  btt6.style.opacity = "1";
  hang.style.opacity = "1";
});

btt6.addEventListener("click", () => {
  btt6.style.opacity = "0";

  // hide coma.mp4
  sadcat.pause();
  sadcat.style.opacity = "0";

  // show cryingruru.mp4
  cryingruru.style.opacity = "1";
  cryingruru.play();
});
