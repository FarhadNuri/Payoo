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