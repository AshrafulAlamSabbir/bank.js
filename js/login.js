// step 1 add event listener
document.getElementById('login-btn').addEventListener('click', function () {
    // step 2 get email address
    const emailField = document.getElementById('email-btn');
    const email = emailField.value;
    // step 3 get pass
    const passwordField = document.getElementById('pass-btn');
    const pass = passwordField.value;
    // step 4 verify email or pass

    if (email === 'bank@gmail.com' && pass === 'bank') {
        window.location.href = 'bank.html';
    } else {
        alert('wrong email and pass. email = bank@gmail.com pass = bank')
    }
})