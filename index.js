function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) return "very cold";
  if (celsius < 20) return "cold";
  if (celsius < 30) return "warm";
  if (celsius < 40) return "hot";
  return "very hot";
}

const userInput = prompt("Enter a temperature in Fahrenheit:");
const fahrenheit = parseFloat(userInput);

if (!isNaN(fahrenheit)) {
  const celsius = convertToCelsius(fahrenheit).toFixed(2);
  const description = describeTemperature(fahrenheit);
  alert(`${fahrenheit}°F is ${celsius}°C — that's ${description}!`);
} else {
  alert("Please enter a valid number.");
}
