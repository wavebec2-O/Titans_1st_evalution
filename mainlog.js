// Function to handle login
async function handleLogin(event) {
    event.preventDefault();

    // Get user input values
    const userType = document.querySelector('input[name="optradio"]:checked').value;
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Basic validation
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Construct the login data payload to send to the server
    const loginData = {
        username,
        password,
        userType
    };

    try {
        // Send a request to your backend to check if the user is registered
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error('Login failed. User not registered.');
        }

        const userData = await response.json();

        // Assuming the backend returns a success message or user data
        alert(`Welcome back, ${userType === 'student' ? 'Student' : 'Placement Officer'}!`);

        // Redirect to appropriate dashboard
        if (userType === 'student') {
            window.location.href = "student_dashboard.html";
        } else if (userType === 'placement') {
            window.location.href = "officer.html";
        }

    } catch (error) {
        console.error('Login failed:', error);
        alert('User not found');
    }
}

// Add event listener to the submit button for login form
document.querySelector('.btn-success').addEventListener('click', handleLogin);
