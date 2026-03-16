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