document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  const bill = getValueFromInput("bill");
  const accountNumber = getValueFromInput("pay-bill-account-number");
  const amount = getValueFromInput("pay-bill-amount");
  const pin = getValueFromInput("pay-bill-pin");

  if (bill === "") {
    alert("Please select a bill.");
    return;
  }
  if (accountNumber.length !== 11) {
    clearPayBillInputs();
    alert("Please enter a valid 11 digit account number.");
    return;
  }
  const balance = getBalance();

  const newBalance = Number(balance) - Number(amount);
  if (newBalance < 0) {
    alert("Insufficient balance.");

    return;
  }

  if (pin.length === 4 && pin === "1234") {
    console.log("Pay bill successful.");
    clearPayBillInputs();
    setBalance(newBalance);
    alert(
      `Successfully paid ${amount} for ${bill}! Your new balance is ${newBalance}.`,
    );
    const transactionContainer = document.getElementById(
      "transaction-container",
    );
    const transactionCard = document.createElement("div");
    transactionCard.classList.add("transaction-card", "p-5", "bg-base-100");
    transactionCard.innerHTML = `
          <p><strong>Pay Bill of ${amount} for ${bill}</strong></p>
          <p>Account Number: ${accountNumber}</p>
          <p>New Balance: ${newBalance}</p>
        `;
    transactionContainer.append(transactionCard);
    return;
  } else {
    console.log("Pay bill failed.");

    alert("Invalid PIN. Please try again.");
    return;
  }
});
