const seats = document.querySelectorAll('.seats');
let selectedSeats = [];

function handleSeatSelection(seat) {
  const confirmBtn = document.querySelector('.confirm_btn');

  if (selectedSeats.includes(seat.id)) {
    selectedSeats = selectedSeats.filter(selectedSeat => selectedSeat !== seat.id);
    seat.style.backgroundColor = '';
    seat.classList.remove('selected');
  } else {
    if (selectedSeats.length >= 5) {
      alert('You can select maximum 5 seats.');
      return;
    }

    selectedSeats.push(seat.id);
    seat.style.backgroundColor = 'green';
    seat.classList.add('selected');
  }

  confirmBtn.disabled = selectedSeats.length < 2 || selectedSeats.length > 5;
}

seats.forEach(seat => seat.addEventListener('click', () => handleSeatSelection(seat)));

document.querySelector('.confirm_btn').addEventListener('click', () => {
  if (selectedSeats.length >= 2 && selectedSeats.length <= 5) {
    window.location.href = "../booking.html?seats";
  }
});



