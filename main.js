// Function to handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    console.log('Form submitted'); // Check if form submission is triggered

    // Get form inputs
    const userType = document.querySelector('input[name="optradio"]:checked').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    console.log('User type:', userType);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Basic validation
    if (username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Password matching validation
    if (password !== confirmPassword) {
        alert("Password doesn't match!!!");
        // document.getElementById('passwordError').style.display = 'block';
        return;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Display a message based on user type
    if (userType === "student") {
        alert(`User registered successfully!`);
        // Redirect or handle signup process for student
        window.location.href = "login.html";
    } else if (userType === "placement") {
        alert(`User registered successfully!`);
        // Redirect or handle signup process for placement officer
        window.location.href = "login.html";
    }

    // Optionally, submit form to backend/API for further processing
    // Example: sendDataToBackend(username, password, userType);
});
