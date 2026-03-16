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
    } else {
        console.log("Add money failed.");
        clearAddMoneyInputs();
        alert("Invalid PIN. Please try again.");
        return;
    }

  
});
