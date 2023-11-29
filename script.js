document.addEventListener('DOMContentLoaded', function () {
    const seatsContainer = document.getElementById('seats-container');
    const bookBtn = document.getElementById('book-btn');
    const messageDiv = document.getElementById('message');

    const totalSeats = 30;
    let selectedSeats = [];

    // Create seats
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i;

        seat.addEventListener('click', function () {
            toggleSeatSelection(seat);
        });

        seatsContainer.appendChild(seat);
    }

    function toggleSeatSelection(seat) {
        seat.classList.toggle('selected');

        const seatNumber = parseInt(seat.textContent);

        if (selectedSeats.includes(seatNumber)) {
            selectedSeats = selectedSeats.filter(num => num !== seatNumber);
        } else {
            selectedSeats.push(seatNumber);
        }
    }

    bookBtn.addEventListener('click', function () {
        if (selectedSeats.length > 0) {
            const message = `Booked seats: ${selectedSeats.join(', ')}`;
            messageDiv.textContent = message;
            messageDiv.style.color = '#28a745';
        } else {
            messageDiv.textContent = 'Please select at least one seat.';
            messageDiv.style.color = '#dc3545';
        }
    });
});
