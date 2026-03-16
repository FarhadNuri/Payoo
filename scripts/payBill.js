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
  } else {
    console.log("Pay bill failed.");

    alert("Invalid PIN. Please try again.");
    return;
  }
});
