let weight = prompt("add your weight (kg):");
let height = prompt("add your height (cm):");

weight = parseFloat(weight);
height = parseFloat(height) / 100;

const bmi = weight / (height * height);


let status = "number";
if (bmi < 18.5) {
  status = "underweight";
  console.log("underweight");
} else if (bmi < 25) {
  status = "normal";
  console.log("normal");
} else {
  status = "overweight";
  console.log("overweight");
}
alert("Your BMI is " + status );