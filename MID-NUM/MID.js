// version 1 // 
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

let middle;

if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {  
  middle = num1;

} else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
  middle = num2;
} else {
  middle = num3;
}

alert("The middle number is: " + middle);

// version 2 

// let a = Number(prompt("Enter number one:"));
// let b = Number(prompt("Enter number two:"));
// let c = Number(prompt("Enter number three:"));

// let middle = a + b + c - Math.max(a, b, c) - Math.min(a, b, c); 

// console.log(middle);
