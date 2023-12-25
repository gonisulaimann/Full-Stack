// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to generate a random name
    function generateRandomName() {
        const names = ['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis', 'Michael Brown'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    // Function to generate a random company
    function generateRandomCompany() {
        const companies = ['ABC Corp', 'XYZ Ltd', 'Tech Solutions', 'Global Innovations', 'Web Services'];
        const randomIndex = Math.floor(Math.random() * companies.length);
        return companies[randomIndex];
    }

    // Function to generate a random country
    function generateRandomCountry() {
        const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    }

    // Function to handle row hover
    function handleRowHover(event) {
        const hoveredRow = event.currentTarget;

        // Apply styles on hover
        hoveredRow.style.background = 'rgb(86, 156, 86)';
        hoveredRow.style.color = 'white';
        hoveredRow.style.transition = '0.3s ease-in-out';
        hoveredRow.style.transform = 'scale(1.1)';

        // Add a click event listener to navigate to the 'data' page
        hoveredRow.addEventListener('click', function () {
            // Navigate to the 'data' page on localhost
            window.location.href = 'http://localhost/data';
        });
    }

    // Function to handle row leave
    function handleRowLeave(event) {
        const leftRow = event.currentTarget;

        // Reset styles on leave
        leftRow.style.background = '';
        leftRow.style.color = '';
        leftRow.style.transition = '0.3s ease-in-out';
        leftRow.style.transform = 'scale(1)';

        // Remove the click event listener when leaving
        leftRow.removeEventListener('click', function () {
            window.location.href = 'http://localhost/data';
        });
    }

    // Function to duplicate the first row in the table with random data
    function duplicateRows() {
        // Reference to the table and its body
        const table = document.getElementById('customers');
        const tbody = table.getElementsByTagName('tbody')[0];

        // Reference to the first row
        const firstRow = tbody.getElementsByTagName('tr')[0];

        // Duplicate and insert the first row 20 times with random data
        for (let i = 0; i < 20; i++) {
            const clonedRow = firstRow.cloneNode(true);

            // Set random data for each cell
            clonedRow.getElementsByTagName('td')[0].textContent = generateRandomName();
            clonedRow.getElementsByTagName('td')[1].textContent = generateRandomCompany();
            clonedRow.getElementsByTagName('td')[2].textContent = generateRandomCountry();

            // Add hover and leave event listeners to each row
            clonedRow.addEventListener('mouseenter', handleRowHover);
            clonedRow.addEventListener('mouseleave', handleRowLeave);

            tbody.appendChild(clonedRow);
        }
    }

    // Call the function to duplicate rows
    duplicateRows();
});
