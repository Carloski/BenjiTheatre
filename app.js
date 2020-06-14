const container = document.querySelector('.screen-container');
const seats = document.querySelectorAll('.row .seats:not(.occulied)');
let count = document.getElementById('count');
let total = document.getElementById('total');

let ticketPrice = Number(movie.value);

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  //   copy selected seats into an array and Map through the array to return a new array of indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  let selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event

movie.addEventListener('change', (e) => {
  ticketPrice = Number(e.target.value);
  updateSelectedCount();
});

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
