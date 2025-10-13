


let sum = 0;
for (; ;) {
    const num = Number(prompt("enter number"));
    sum += num;
    if (num === 0) {
        break;
    }
}

console.log(sum);