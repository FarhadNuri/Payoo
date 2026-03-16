document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    const amount = 2500;
    const coupon = getValueFromInput("get-bonus-coupon");

    const balance = getBalance();

    const newBalance = Number(balance) + Number(amount);
    if (coupon === "123456") {
      console.log("Get bonus successful.");
      clearGetBonusInputs();
      setBalance(newBalance);
      alert(
        `Successfully redeemed ${amount} from your coupon! Your new balance is ${newBalance}.`,
      );
    } else {
      console.log("Get bonus failed.");
      clearGetBonusInputs();
      alert("Invalid coupon. Please try again.");
      return;
    }
  });
