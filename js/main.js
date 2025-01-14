// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;

    // Here you would typically send a request to your server to authenticate
    // For this example, we'll use a simple check
    if (username && password) {
        if (userType === 'user') {
            window.location.href = 'user-dashboard.html';
        } else {
            window.location.href = 'admin-dashboard.html';
        }
    } else {
        alert('Please enter valid credentials');
    }
});

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Here you would typically send a request to your server to log out
    // For this example, we'll just redirect to the login page
    window.location.href = 'index.html';
});

// Centre Clearance form submission
document.getElementById('centreClearanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server
    // For this example, we'll just log the data to the console
    console.log('Form submitted');
    alert('Your clearance request has been submitted for review');
});

// Populate departments dynamically
const departments = ['Computer Science', 'Engineering', 'Business Administration', 'Medicine'];
const departmentSelect = document.getElementById('department');
departments.forEach(dept => {
    const option = document.createElement('option');
    option.value = dept.toLowerCase().replace(' ', '_');
    option.textContent = dept;
    departmentSelect.appendChild(option);
});