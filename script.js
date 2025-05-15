// Function to create booking option buttons
function createBookingButtons() {
    // Get the booking section
    var bookingDiv = document.querySelector('.booking');
    if (bookingDiv) {
        // Create a container for the buttons
        var buttonContainer_1 = document.createElement('div');
        buttonContainer_1.classList.add('button-container');
        // Booking options
        var bookingOptions = ['Room Suite', 'Dinner Suite', 'Holidays Suite'];
        // Create buttons for each option
        bookingOptions.forEach(function (option) {
            var button = document.createElement('button');
            button.textContent = option;
            button.classList.add('booking-button');
            button.addEventListener('click', function () {
                alert("You selected: ".concat(option));
            });
            buttonContainer_1.appendChild(button);
        });
        // Append the button container to the booking section
        bookingDiv.appendChild(buttonContainer_1);
    }
}
// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createBookingButtons);
