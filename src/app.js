import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let timer;


  function generateCard() {
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length)
    let randomSuitNumber = Math.floor(Math.random() * suit.length)
    let finalSuit = suit[randomSuitNumber]

    let cardElement = document.getElementById("theCard");

    if (cardElement) {
      cardElement.className = "";
      cardElement.classList.add("card");
      
      cardElement.classList.add(getSuiteClass(finalSuit));

    cardElement.innerHTML = `
        <div class="corner top-left">
          <span>${cardNumber[randomCardNumber]}</span>
          <i class="${getSuitIcon(finalSuit)}"></i>
        </div>
        <div class="corner bottom-right">
          <span>${cardNumber[randomCardNumber]}</span>
          <i class="${getSuitIcon(finalSuit)}"></i>
        </div>
        <div id="cardContent">${cardNumber[randomCardNumber]}</div>
      `;
    } else {
      console.error("Elemento 'theCard' no encontrado en el DOM.");
    }


  }

  function getSuiteClass(suit) {
    switch (suit) {
      case "Diamonds":
        return "suit-diamonds";
      case "Spades":
        return "suit-spades";
      case "Hearts":
        return "suit-hearts";
      case "Clubs":
        return "suit-clubs";
      default:
        return "";
    }
  }

  function getSuitIcon(suit) {
    switch (suit) {
      case "Diamonds":
        return "bi bi-suit-diamond-fill";
      case "Spades":
        return "bi bi-suit-spade-fill";
      case "Hearts":
        return "bi bi-suit-heart-fill"; 
      case "Clubs":
        return "bi bi-suit-club-fill";
      default:
        return "";
    }
  }

  generateCard();

  timer = setInterval(generateCard, 5000)











};
