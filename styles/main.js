let removeButtons = document.querySelectorAll(".remove-button");
let card = document.querySelectorAll(".card");
let plusButton = document.querySelectorAll(".plus-Button");
let moinButton = document.querySelectorAll(".moin-Button");
// totall fuction
function total() {
  let price = document.getElementsByClassName("price");
  let qtite = document.getElementsByClassName("quantity");
  let total = document.querySelector(".total-Price");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = sum + price[i].innerHTML * qtite[i].innerHTML;
  }
  total.innerHTML = sum;
}
// Add event listeners to each "Remove" button
for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", function () {
    card[i].remove();
  });
}
// Add event listeners to each "plus" button
for (let i = 0; i < plusButton.length; i++) {
  plusButton[i].addEventListener("click", function () {
    plusButton[i].nextElementSibling.innerHTML++;
    total();
  });
}
// Add event listeners to each "moin" button
for (let i = 0; i < moinButton.length; i++) {
  moinButton[i].addEventListener("click", function () {
    if (moinButton[i].previousElementSibling.innerHTML > 0) {
      moinButton[i].previousElementSibling.innerHTML--;
      total();
    }
  });
}
