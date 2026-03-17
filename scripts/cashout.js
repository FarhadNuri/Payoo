document.getElementById("cashout-btn").addEventListener("click", function (e) {
  const agentNumber = getValueFromInput("cashout-number");

  if (agentNumber.length !== 11) {
    clearCashoutInputs();
    alert("Please enter a valid 11 digit agent number.");
  }

  const amount = getValueFromInput("cashout-amount");

  const balance = getBalance();

  const newBalance = Number(balance) - Number(amount);

  if (newBalance < 0) {
    clearCashoutInputs();
    alert("Insufficient balance.");

    return;
  }

  const pin = getValueFromInput("cashout-pin");

  if (pin === "1234") {
    setBalance(newBalance);
    console.log("Cashout successful.");
    clearCashoutInputs();
    alert(
      `Cashout of ${amount} to agent ${agentNumber} successful! Your new balance is ${newBalance}.`,
    );
    const transactionContainer = document.getElementById(
      "transaction-container",
    );
    const transactionCard = document.createElement("div");
    transactionCard.classList.add("transaction-card", "p-5", "bg-base-100");
    transactionCard.innerHTML = `
          <p><strong>Cashout of ${amount} to agent ${agentNumber}</strong></p>
          <p>New Balance: ${newBalance}</p>
        `;
    transactionContainer.append(transactionCard);
    return;
  } else {
    console.log("Cashout failed.");
    clearCashoutInputs();
    alert("Invalid PIN. Please try again.");

    return;
  }
});
