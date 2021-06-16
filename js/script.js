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
let cardDetails = document.getElementById("card-details");



cardChild[1].addEventListener("click", function() {
  cardSide.classList.add("active");
  invoiceSide.classList.remove("active");
  cardDetails.classList.remove("hidden");
  createConfirmation();
});

cardChild[3].addEventListener("click", function() {
  cardSide.classList.add("active");
  invoiceSide.classList.remove("active");
  cardDetails.classList.remove("hidden");
  createConfirmation();
});

invoiceChild[1].addEventListener("click", function() {
  invoiceSide.classList.add("active");
  cardSide.classList.remove("active");
  cardDetails.classList.add("hidden");
  createConfirmation();
});

invoiceChild[3].addEventListener("click", function() {
  invoiceSide.classList.add("active");
  cardSide.classList.remove("active");
  cardDetails.classList.add("hidden");
  createConfirmation();
});

  // Chosen plan

let kidBg = document.getElementById("kid-bg");
let adultBg = document.getElementById("adult-bg");
let proBg = document.getElementById("pro-bg");
let kid = kidBg.childNodes;
let adult = adultBg.childNodes;
let pro = proBg.childNodes;
let planKid = document.getElementById("plan-kid");
let planAdult = document.getElementById("plan-adult");
let planPro = document.getElementById("plan-pro");
let confirmationMsg = document.getElementById("confirmation-msg");



kid[1].addEventListener("click", function() {
  kidBg.classList.add("active");
  adultBg.classList.remove("active");
  proBg.classList.remove("active");
  planKid.classList.add("plan-active");
  planAdult.classList.remove("plan-active");
  planPro.classList.remove("plan-active");
  createConfirmation();
});

kid[3].addEventListener("click", function() {
  kidBg.classList.add("active");
  adultBg.classList.remove("active");
  proBg.classList.remove("active");
  planKid.classList.add("plan-active");
  planAdult.classList.remove("plan-active");
  planPro.classList.remove("plan-active");
  createConfirmation();
});

adult[1].addEventListener("click", function() {
  adultBg.classList.add("active");
  kidBg.classList.remove("active");
  proBg.classList.remove("active");
  planAdult.classList.add("plan-active");
  planKid.classList.remove("plan-active");
  planPro.classList.remove("plan-active");
  createConfirmation();
});

adult[3].addEventListener("click", function() {
  adultBg.classList.add("active");
  kidBg.classList.remove("active");
  proBg.classList.remove("active");
  planAdult.classList.add("plan-active");
  planKid.classList.remove("plan-active");
  planPro.classList.remove("plan-active");
  createConfirmation();
});

pro[1].addEventListener("click", function() {
  proBg.classList.add("active");
  adultBg.classList.remove("active");
  kidBg.classList.remove("active");
  planPro.classList.add("plan-active");
  planAdult.classList.remove("plan-active");
  planKid.classList.remove("plan-active");
  createConfirmation();
});

pro[3].addEventListener("click", function() {
  proBg.classList.add("active");
  adultBg.classList.remove("active");
  kidBg.classList.remove("active");
  planPro.classList.add("plan-active");
  planKid.classList.remove("plan-active");
  planAdult.classList.remove("plan-active");
  createConfirmation();
});

function createConfirmation () {
  var price;
  if (kidBg.classList[1] === "active") {
    price = "49.00";
  } else if (adultBg.classList[1] === "active") {
    price = "69.00";
  } else {
    price = "99.00";
  };
  if (cardSide.classList[1] === "active") {
    confirmationMsg.innerHTML = "Seu cartão será debitado em R$ " + price + ".";
    console.log("price: " + price);
  } else {
    confirmationMsg.innerHTML = "Você receberá um boleto no valor de R$ " + price + ".";
  };
}