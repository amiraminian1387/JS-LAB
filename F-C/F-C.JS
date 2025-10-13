let choice = prompt("Are you converting from Celsius to Fahrenheit (C) or from Fahrenheit to Celsius (F)? Please enter C or F:");

if (choice === "C") {
    let celsius = prompt("Enter your temperature in Celsius:");
    const fahrenheit = (celsius * 9) / 5 + 32;
    alert("The temperature in Fahrenheit is " + fahrenheit);
}
else if (choice === "F") {
    let fahrenheit = prompt("Enter your temperature in Fahrenheit:");
    const celsius = ((fahrenheit - 32) * 5) / 9;
    alert("The temperature in Celsius is " + celsius);
}
else {
    alert("Invalid input. Please enter only C or F.");
}
// end //