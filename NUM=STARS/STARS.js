
// version 1 

let userInput = prompt("Enter a number:");

let num = Number(userInput);

for (let i = 1; i <= num; i++) {
  
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  
  console.log(stars);
}

// version 2 

// let num = prompt("Enter a number:");

// for (let i = 1; i <= num; i++) {
//   console.log("*".repeat(i));
// }
