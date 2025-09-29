document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // --- Registration Logic ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (localStorage.getItem(email)) {
                alert("An account with this email already exists.");
                return;
            }

            const userData = { username, password };
            localStorage.setItem(email, JSON.stringify(userData));
            
            alert("Registration successful! You can now sign in.");
            window.location.href = 'login-T.html';
        });
    }

    // --- Login Logic ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const storedUserData = localStorage.getItem(email);

            if (!storedUserData) {
                alert("No account found with this email. Please register first.");
                return;
            }

            const userData = JSON.parse(storedUserData);

            if (userData.password === password) {
                alert(`Welcome back, ${userData.username}!`);
                window.location.href = 'teacher-dashboard.html'; // Redirect to welcome/dashboard
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    }
});
