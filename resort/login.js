document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    if (email && password) {
        alert('Login successful! Welcome to Paradise Resort.');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});



document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password reset link will be sent to your email.');
});