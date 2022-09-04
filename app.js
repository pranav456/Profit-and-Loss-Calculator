const initialPrice = document.querySelector("#cost-price");
const stockQuantity = document.querySelector("#stock-quantity");
const sellingPrice = document.querySelector("#selling-price");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");

const showResult = (msg, color) => {
  output.style.display = "block";
  output.style.color = color;
  output.innerText = msg;
};

const calculate = (ip, qty, cp) => {
  if (cp > ip) {
    const netProfit = (cp - ip) * qty;
    const profitPercentage = Math.trunc((netProfit / ip) * 100);
    showResult(
      `Your profit is ${netProfit} and profit percentage is ${profitPercentage}%`,
      "green"
    );
  } else if (cp < ip) {
    const netLoss = (ip - cp) * qty;
    const lossPercentage = Math.trunc((netLoss / ip) * 100);
    showResult(
      `Your loss is ${netLoss} and loss percentage is ${lossPercentage}%`,
      "red"
    );
  } else {
    showResult("No profit no loss", "blue");
  }
};

checkBtn.addEventListener("click", function buttonClick() {
  output.style.display = "none";

  const ip = Number(initialPrice.value);
  const qty = Number(stockQuantity.value);
  const cp = Number(sellingPrice.value);

  if (ip > 0 && qty > 0 && cp > 0) {
    calculate(ip, qty, cp);
  } else if (ip < 0 || qty < 0 || cp < 0) {
    showResult("Please Add valid data", "red");
  } else {
    showResult("Please Add all fields", "red");
  }
});
