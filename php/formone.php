<?php
    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $fname = test_input($_POST["fname"]);
        $lname = test_input($_POST["lname"]);
        $location = test_input($_POST["location"]);
        $selectedCar = test_input($_POST["cars"]);
        $termsAgreed = isset($_POST["terms"]) ? "Yes" : "No";

        // Display the submitted data
        echo "<p>Name: $fname $lname</p>";
        echo "<p>Location: $location</p>";
        echo "<p>Selected Car: $selectedCar</p>";
        echo "<p>Agreed to Terms and Conditions: $termsAgreed</p>";
    } else {
        // If the form is not submitted, redirect to the form page
        echo '<p>No data submitted. <a href="index.html">Return to Form</a></p>';
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