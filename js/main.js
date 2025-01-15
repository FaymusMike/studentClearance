// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    // Here you would typically send a request to your server to authenticate
    // For this example, we'll use a simple check
    if (username && password) {
        localStorage.setItem('username', username);
        if (userType === 'user') {
            window.location.href = 'user-dashboard.html';
        } else {
            window.location.href = 'admin-dashboard.html';
        }
    } else {
        alert('Please enter valid credentials');
    }
});

// Sign up functionality
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Here you would typically send a request to your server to create a new user
    // For this example, we'll just show a success message
    alert('Account created successfully! Please log in.');
    document.getElementById('login-tab').click();
});

// Logout functionality
document.getElementById('logoutBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});

// Set username on dashboard
document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        const username = localStorage.getItem('username');
        userNameElement.textContent = username || 'User';
    }
});

