// index




// sign_up

function registerData(){

const name=document.getElementById("name").value;    
const number=document.getElementById("number").value;    
const email=document.getElementById("email").value;    
const password=document.getElementById("password").value;   

let userData = {
    name: name,
    number: number,
    email: email,
    password: password
  };

  localStorage.setItem(email, JSON.stringify(userData));

}

//search_bus

//buses

//seats

const seatButtons = document.querySelectorAll('.seats');
const bookedSeats = []; // Array to store booked seat numbers
const selectedSeats = [];
const selectedSeatsCount = document.getElementById('selectedSeatsCount');

seatButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedSeat = button.textContent;

    if (bookedSeats.includes(selectedSeat)) {
      alert('This seat is already booked. Please select a different seat.');
    } else if (selectedSeats.includes(selectedSeat)) {
      selectedSeats.splice(selectedSeats.indexOf(selectedSeat), 1);
      button.style.backgroundColor = 'white';
    } else if (selectedSeats.length < 5) {
      selectedSeats.push(selectedSeat);
      button.style.backgroundColor = 'red';
    } else {
      alert('You can only select a maximum of 5 seats.');
    }

    selectedSeatsCount.textContent = selectedSeats.length;

    const confirmButton = document.querySelector('.confirm_btn');
    if (selectedSeats.length < 2) {
      confirmButton.disabled = true;
      alert('Please select at least 2 seats.');
    } else if (selectedSeats.length > 5) {
      confirmButton.disabled = true;
      alert('Please select a maximum of 5 seats.');
    } else {
      confirmButton.disabled = false;
    }
  });
});

// Function to mark a seat as booked
function bookSeat(seatNumber) {
  if (!bookedSeats.includes(seatNumber)) {
    bookedSeats.push(seatNumber);
    const button = document.querySelector(`.seats:nth-child(${seatNumber})`);
    button.disabled = true; // Disable button for booked seat
  }
}

//booking
