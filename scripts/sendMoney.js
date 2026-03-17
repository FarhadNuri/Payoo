document
  .getElementById("send-money-btn")
  .addEventListener("click", function (e) {
    const accountNumber = getValueFromInput("send-money-number");
    const amount = getValueFromInput("send-money-amount");
    const pin = getValueFromInput("send-money-pin");

    if (accountNumber.length !== 11) {
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
      console.log("Send money successful.");
      clearSendMoneyInputs();
      setBalance(newBalance);
      alert(
        `Successfully sent ${amount} to ${accountNumber}! Your new balance is ${newBalance}.`,
      );
      const transactionContainer = document.getElementById(
        "transaction-container",
      );
      const transactionCard = document.createElement("div");
      transactionCard.classList.add("transaction-card", "p-5", "bg-base-100");
      transactionCard.innerHTML = `
          <p><strong>Send Money of ${amount} to ${accountNumber}</strong></p>
          <p>New Balance: ${newBalance}</p>
        `;
      transactionContainer.append(transactionCard);
      return;
    } else {
      console.log("Send money failed.");
      alert("Invalid PIN. Please try again.");
      return;
    }
  });
