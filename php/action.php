<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);

    // Perform any additional validation or processing as needed

    // Display the submitted data
    echo "Data received and stored successfully!<br>";
    echo "Name: $name<br>";
    echo "Email: $email<br>";
}
else {
    // If the form is not submitted, redirect to the form page
    header("Location: index.html");
    exit();
}

// Function to sanitize and validate input data
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
