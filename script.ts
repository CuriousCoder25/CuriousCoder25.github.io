// Function to create booking option buttons
function createBookingButtons(): void {
    // Get the booking section
    const bookingDiv = document.querySelector('.booking');

    if (bookingDiv) {
        // Create a container for the buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        // Booking options
        const bookingOptions: string[] = ['Room Suite', 'Dinner Suite', 'Holidays Suite'];

        // Create buttons for each option
        bookingOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('booking-button');
            button.addEventListener('click', () => {
                alert(`You selected: ${option}`);
            });
            buttonContainer.appendChild(button);
        });

        // Append the button container to the booking section
        bookingDiv.appendChild(buttonContainer);
    }
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createBookingButtons);