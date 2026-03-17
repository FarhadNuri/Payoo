document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    const bank = getValueFromInput("bank");
    const accountNumber = getValueFromInput("account-number");
    const amount = getValueFromInput("add-money-amount");
    const pin = getValueFromInput("add-money-pin");

    if (bank === "") {
      alert("Please select a bank.");
      return;
    }
    if (accountNumber.length !== 11) {
      clearAddMoneyInputs();
      alert("Please enter a valid 11 digit account number.");
      return;
    }
      const balance = getBalance();

  const newBalance = Number(balance) + Number(amount);
    if(pin.length === 4 && pin === "1234") {
        console.log("Add money successful.");
        clearAddMoneyInputs();
        setBalance(newBalance);
        alert(
          `Successfully added ${amount} from your ${bank} account! Your new balance is ${newBalance}.`,
        );

        const transactionContainer = document.getElementById("transaction-container");
        const transactionCard = document.createElement("div");
        transactionCard.classList.add("transaction-card", "p-5", "bg-base-100");
        transactionCard.innerHTML = `
          <p><strong>Added ${amount} from ${bank} account</strong></p>
          <p>Account Number: ${accountNumber}</p>
          <p>New Balance: ${newBalance}</p>
        `;
        transactionContainer.append(transactionCard);
        return;
    } else {
        console.log("Add money failed.");
        clearAddMoneyInputs();
        alert("Invalid PIN. Please try again.");
        return;
    }

  
});
