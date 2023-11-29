function validateForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Validate name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        return;
    }

    // Validate password (minimum 6 characters)
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        return;
    }

    alert("Form submitted successfully!");

   // Clear form fields
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("password").value = "";
}


