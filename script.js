//your JS code here. If required.
const loginForm = document.getElementById("login-form");
		const usernameInput = document.getElementById("username");
		const passwordInput = document.getElementById("password");
		const rememberMeCheckbox = document.getElementById("remember-me");
		const submitButton = document.getElementById("submit-btn");
		const existingUserButton = document.getElementById("existing");

		// Check if there are saved details
		if (localStorage.getItem("username") && localStorage.getItem("password")) {
			existingUserButton.style.display = "block";
		}

		// Event listener for submit button
		submitButton.addEventListener("click", (e) => {
			e.preventDefault();

			// Check if remember me checkbox is checked
			if (rememberMeCheckbox.checked) {
				// Save details to localstorage
				localStorage.setItem("username", usernameInput.value);
				localStorage.setItem("password", passwordInput.value);
			} else {
				// Remove saved details from localstorage
				localStorage.removeItem("username");
				localStorage.removeItem("password");
			}

			// Show alert with logged in message
			alert(`Logged in as ${usernameInput.value}`);
		});

		// Event listener for existing user button
		existingUserButton.addEventListener("click", (e) => {
			e.preventDefault();

			// Show alert with saved username
			alert(`Logged in as ${localStorage.getItem("username")}`);
		});