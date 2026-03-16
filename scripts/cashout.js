document.getElementById('cashout-btn').addEventListener('click', function(e) {

    const agentInput = document.getElementById('cashout-number');
    const agentNumber = agentInput.value;
    
    const amountInput = document.getElementById('cashout-amount');
    const amount = amountInput.value;
    
    const pinInput = document.getElementById('cashout-pin');
    const pin = pinInput.value;
    

    const balanceInput = document.getElementById('balance');
    const balance= balanceInput.innerText;
    

    const newBalance = Number(balance) - Number(amount);
    

    if(pin === "1234" && newBalance >= 0) {
        balanceInput.innerText = newBalance;
        console.log('Cashout successful.');
    } else {
        console.log('Cashout failed.');
    }
    agentInput.value = '';
    amountInput.value = '';
    pinInput.value = '';

});