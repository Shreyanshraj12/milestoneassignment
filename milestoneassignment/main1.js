function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  }
  
  
  validatePassword("password123", "password123"); 
  validatePassword("password123", "password456");