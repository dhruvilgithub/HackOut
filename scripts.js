// Function to display the sign-up form
document.getElementById('signupLink').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

// Function to go back to the login form
document.getElementById('backToLogin').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
});

// Sign Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Store user credentials in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful! You can now log in.');

    // Redirect to login
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Redirecting to the homepage...');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
