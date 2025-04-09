const hoverklovn = document.querySelector("#hoverklovn");
const hoverkniv = document.querySelector("#hoverkniv");
const hovertekst = document.querySelector("#hovertekst");
const hovertelefon = document.querySelector("#hovertelefon");
const hoverblod = document.querySelector("#hoverblod");

hoverklovn.addEventListener("mouseover", headHighLight1);
hoverklovn.addEventListener("mouseout", headUnHighlight1);
hoverklovn.addEventListener("click", headInfo1);
hoverklovn.addEventListener("click", infoBox1);
hoverklovn.addEventListener("click", infoBox2);

hoverkniv.addEventListener("mouseover", headHighLight2);
hoverkniv.addEventListener("mouseout", headUnHighlight2);
hoverkniv.addEventListener("click", headInfo2);
hoverkniv.addEventListener("click", infoBox3);
hoverkniv.addEventListener("click", infoBox4);

hovertekst.addEventListener("mouseover", headHighLight3);
hovertekst.addEventListener("mouseout", headUnHighlight3);
hovertekst.addEventListener("click", headInfo3);
hovertekst.addEventListener("click", infoBox5);
hovertekst.addEventListener("click", infoBox6);

hovertelefon.addEventListener("mouseover", headHighLight4);
hovertelefon.addEventListener("mouseout", headUnHighlight4);
hovertelefon.addEventListener("click", headInfo4);
hovertelefon.addEventListener("click", infoBox7);
hovertelefon.addEventListener("click", infoBox8);

hoverblod.addEventListener("mouseover", headHighLight4);
hoverblod.addEventListener("mouseout", headUnHighlight4);
hoverblod.addEventListener("click", headInfo4);
hoverblod.addEventListener("click", infoBox7);
hoverblod.addEventListener("click", infoBox8);

function headHighLight1() {
  console.log("headHighLight1");
  document.querySelector("#hoverklovn").style.fill = "#FF0000";
}

function headUnHighlight1() {
  console.log("headHighLight");
  document.querySelector("#hoverklovn").style.fill = "#fff";
}

function headInfo1() {
  console.log("headInfo");
  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "klovnen";
  document.querySelector(".info-text > article > p").textContent =
    "lorem ipsum 40";
}

function infoBox1() {
  console.log("headInfo");
  document.querySelector("#efficiency").textContent = "hahahha";
}

function infoBox2() {
  console.log("headInfo");
  document.querySelector("#requirement").textContent = "forbliv i live";
}

function headHighLight2() {
  console.log("headHighLight2");
  document.querySelector("#hoverkniv").style.fill = "#FF0000";
}

function headUnHighlight2() {
  console.log("headHighLight2");
  document.querySelector("#hoverkniv").style.fill = "#fff";
}

function headInfo2() {
  console.log("headInfo");
  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "Kniven";
  document.querySelector(".info-text > article > p").textContent =
    "lorem ipsum 30";
}

function infoBox3() {
  console.log("headInfo");
  document.querySelector("#efficiency").textContent = "fyld tekst";
}

function infoBox4() {
  console.log("headInfo");
  document.querySelector("#requirement").textContent = "mere tekst";
}

function headHighLight3() {
  console.log("headHighLight3");
  document.querySelector("#hovertekst").style.fill = "#FF0000";
}

function headUnHighlight3() {
  console.log("headHighLight3");
  document.querySelector("#hovertekst").style.fill = "#fff";
}

function headInfo3() {
  console.log("headInfo");
  animateBoxes();
  document.querySelector(".info-text > h2").textContent = "teksten";
  document.querySelector(".info-text > article > p").textContent =
    "lorem ipsum 30";
}

function infoBox5() {
  console.log("headInfo");
  document.querySelector("#efficiency").textContent = "fyld teksten ud";
}

function infoBox6() {
  console.log("headInfo");
  document.querySelector("#requirement").textContent =
    "mere tekst mere teeeekst";
}

function headHighLight4() {
  console.log("headHighLight");
  document.querySelector("#hovertelefon").style.fill = "#FF0000";
}

function headUnHighlight4() {
  console.log("headHighLight4");
  document.querySelector("#hovertelefon").style.fill = "#fff";
}

function headInfo4() {
  console.log("headInfo");
  animateBoxes();
  document.querySelector(".info-text > h2").textContent = "blodet";
  document.querySelector(".info-text > article > p").textContent =
    "lorem ipsum 30";
}

function infoBox7() {
  console.log("headInfo");
  document.querySelector("#efficiency").textContent = "osvosv";
}

function infoBox8() {
  console.log("headInfo");
  document.querySelector("#requirement").textContent =
    "mere tekst mere teeeekst";
}

function headHighLight() {
  console.log("headHighLight");
  document.querySelector("#hoverblod").style.fill = "#FF0000";
}

function headUnHighlight() {
  console.log("headHighLight");
  document.querySelector("#hoverblod").style.fill = "#fff";
}

function headInfo5() {
  console.log("headInfo");
  animateBoxes();
  document.querySelector(".info-text > h2").textContent = "Blodet";
  document.querySelector(".info-text > article > p").textContent =
    "lorem ipsum 30";
}

function infoBox9() {
  console.log("headInfo");
  document.querySelector("#efficiency").textContent = "osvosv";
}

function infoBox10() {
  console.log("headInfo");
  document.querySelector("#requirement").textContent =
    "mere tekst mere teeeekst";
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
