function validateForm() {
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password1").value;

    let storedUserData = JSON.parse(localStorage.getItem(email));

    if (storedUserData  && storedUserData.password === password) {
      alert('Login successful!');
    
    } else {
      document.getElementById('err1').textContent=' * Invalid email or password.';
      return false;
    }

    localStorage.setItem('isLoggedIn', false);

  
   
    window.location.href = '../search_bus.html';
  }
