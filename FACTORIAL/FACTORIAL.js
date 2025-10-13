
// version 2 : 

let choose = prompt("choose a number and i will count factorial : ");

let number = Number(choose);

let factorial = 1; 

for (let i = 1; i <= number; i++) {
  factorial = factorial * i;
}

alert("factorial " + number + " equal = " + factorial);

// version 2 : 

// let n = prompt("give a number:");

// let f = 1;

// for (let i = 1; i <= n; i++) {
//     f = f * i;
// }

// alert("factorial " + n + " equal " + f);
