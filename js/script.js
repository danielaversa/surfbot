function openNav() {
  let x = document.getElementById("links");
  if (x.style.opacity === "1") {
    x.classList.toggle("nav-open");
  } else {
    x.classList.toggle("nav-open");
  }
}



// Change background depending on chosen form option 
  // Payment Method
let cardSide = document.getElementById("cardside");
let invoiceSide = document.getElementById("invoiceside");
let cardChild = cardSide.childNodes;
let invoiceChild = invoiceSide.childNodes;



cardChild[1].addEventListener("click", function() {
  cardSide.classList.add("active");
  invoiceSide.classList.remove("active");
});

cardChild[3].addEventListener("click", function() {
  cardSide.classList.add("active");
  invoiceSide.classList.remove("active");
});

invoiceChild[1].addEventListener("click", function() {
  invoiceSide.classList.add("active");
  cardSide.classList.remove("active");
});

invoiceChild[3].addEventListener("click", function() {
  invoiceSide.classList.add("active");
  cardSide.classList.remove("active");
});

  // Chosen plan

let kidBg = document.getElementById("kid-bg");
let adultBg = document.getElementById("adult-bg");
let proBg = document.getElementById("pro-bg");
let kid = kidBg.childNodes;
let adult = adultBg.childNodes;
let pro = proBg.childNodes;



kid[1].addEventListener("click", function() {
  kidBg.classList.add("active");
  adultBg.classList.remove("active");
  proBg.classList.remove("active");
});

kid[3].addEventListener("click", function() {
  kidBg.classList.add("active");
  adultBg.classList.remove("active");
  proBg.classList.remove("active");
});

adult[1].addEventListener("click", function() {
  adultBg.classList.add("active");
  kidBg.classList.remove("active");
  proBg.classList.remove("active");
});

adult[3].addEventListener("click", function() {
  adultBg.classList.add("active");
  kidBg.classList.remove("active");
  proBg.classList.remove("active");
});

pro[1].addEventListener("click", function() {
  proBg.classList.add("active");
  adultBg.classList.remove("active");
  kidBg.classList.remove("active");
});

pro[3].addEventListener("click", function() {
  proBg.classList.add("active");
  adultBg.classList.remove("active");
  kidBg.classList.remove("active");
});