document.getElementById('login-btn').addEventListener('click', function(e) {
    console.log('Login button clicked');
    const mobileInput = document.getElementById('mobile');
    const pinInput = document.getElementById('pin');

    const mobile = mobileInput.value;
    const pin = pinInput.value;
    if(mobile === "01234567890" && pin === "1234") {
        
        mobileInput.value = '';
        pinInput.value = '';
        window.location.replace('/home.html');
    } else {
        alert('Invalid mobile number or PIN. Please try again.');
    }
});