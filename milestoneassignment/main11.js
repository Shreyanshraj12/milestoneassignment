function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Example usage
  let celsiusTemperature = 25;
  let fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
  console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}`);
  