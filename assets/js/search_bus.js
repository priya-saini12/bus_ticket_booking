function searchBus() {
    const departValue = document.getElementById('depart').value;
    const goingValue = document.getElementById('going').value;
    const departDateValue = document.getElementById('departDate').value;
  
    if (departValue === 'Depart' || goingValue === 'Going') {
      alert('Please select a valid departure and arrival location.');
      return;
    }
  
    if (departValue === goingValue) {
      alert('Departure and arrival locations cannot be the same.');
      return;
    }
  
    if (!departDateValue) {
      alert('Departure date is required.');
      return;
    }
  
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() );
  
    if (new Date(departDateValue) < minDate) {
      alert('Departure date cannot be in the past.');
      return;
    }
  
    window.location.href = "../buses.html";
  }
  