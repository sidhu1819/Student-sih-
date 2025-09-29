document.addEventListener('DOMContentLoaded', () => {
    // This script is for a page that might have a login or register form.
    // We look for both, but only the one that exists will have its logic run.
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // --- School Registration Logic ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            // Prevent the form from reloading the page
            e.preventDefault();

            // Get all the input values from the school registration form
            const schoolName = document.getElementById('schoolName').value;
            const address = document.getElementById('address').value;
            const adminName = document.getElementById('adminName').value;
            const adminEmail = document.getElementById('adminEmail').value;
            const students = document.getElementById('students').value;
            const password = document.getElementById('password').value;
            
            // --- Validation ---
            // Check if an account with the administrator's email already exists.
            // We use the admin's email as the unique key for the school.
            if (localStorage.getItem(adminEmail)) {
                alert("An account with this administrator email already exists.");
                return; // Stop the function if the email is already registered
            }

            // --- Store Data ---
            // Group all the school's information into a single object.
            const schoolData = {
                schoolName,
                address,
                adminName,
                students,
                password // In a real-world application, password should always be encrypted.
            };

            // Convert the object to a JSON string and save it in localStorage.
            localStorage.setItem(adminEmail, JSON.stringify(schoolData));
            
            // --- Success ---
            // Inform the user and redirect them to the login page.
            alert("School registration successful! You can now sign in with the administrator's email.");
            window.location.href = 'login-S.html'; // Ensure this is the correct login page URL
        });
    }

    // --- Login Logic (Placeholder) ---
    // This part of the script will not run on the registration page,
    // but it maintains the structure you requested. A separate script on the
    // login page would handle this logic.
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
                window.location.href = 'school-dashboard.html'; // Redirect to welcome/dashboard
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    }
});
