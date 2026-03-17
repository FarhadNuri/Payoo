function getValueFromInput(id) {
  const input = document.getElementById(id);
  return input.value;
}
function getBalance() {
  const balanceInput = document.getElementById("balance");
  return balanceInput.innerText;
}

function setBalance(newBalance) {
  const balanceInput = document.getElementById("balance");
  balanceInput.innerText = newBalance;
}

function clearCashoutInputs() {
  const agentInput = document.getElementById("cashout-number");
  const amountInput = document.getElementById("cashout-amount");
  const pinInput = document.getElementById("cashout-pin");
  agentInput.value = "";
  amountInput.value = "";
  pinInput.value = "";
}

function clearAddMoneyInputs() {
  const accountInput = document.getElementById("account-number");
  const amountInput = document.getElementById("add-money-amount");
  const pinInput = document.getElementById("add-money-pin");

  accountInput.value = "";
  amountInput.value = "";
  pinInput.value = "";
}

function clearSendMoneyInputs() {
  const accountInput = document.getElementById("send-money-number");
  const amountInput = document.getElementById("send-money-amount");
  const pinInput = document.getElementById("send-money-pin");
  accountInput.value = "";
  amountInput.value = "";
  pinInput.value = "";
}

function clearPayBillInputs() {
  const billInput = document.getElementById("bill");
  const accountInput = document.getElementById("pay-bill-account-number");
  const amountInput = document.getElementById("pay-bill-amount");
  const pinInput = document.getElementById("pay-bill-pin");
  billInput.value = "";
  accountInput.value = "";
  amountInput.value = "";
  pinInput.value = "";
}

function clearGetBonusInputs() {
  const couponInput = document.getElementById("get-bonus-coupon");
  couponInput.value = "";
}

function showSection(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const sendMoney = document.getElementById("send-money");
  const payBill = document.getElementById("pay-bill");
  const getBonus = document.getElementById("get-bonus");
  const transactions = document.getElementById("transactions");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  sendMoney.classList.add("hidden");
  payBill.classList.add("hidden");
  getBonus.classList.add("hidden");
  transactions.classList.add("hidden");

  const selectedSection = document.getElementById(id);
  selectedSection.classList.remove("hidden");

  const featureButtons = document.querySelectorAll(".feature-btn");
  featureButtons.forEach(function (button) {
    if (button.dataset.section === id) {
      button.classList.remove("btn-soft");
      button.classList.add("btn-active");
    } else {
      button.classList.remove("btn-active");
      button.classList.add("btn-soft");
    }
  });
}
