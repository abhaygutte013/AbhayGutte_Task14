// User Input
let n = parseInt(prompt("Enter a number:"));

// Sum of first n numbers
let sumN = 0;
for (let i = 1; i <= n; i++) {
    sumN += i;
}

// Table of n
console.log("Table of " + n + ":");
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

// Prime Number Check
let isPrime = true;
if (n <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Factors
let factors = "";
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        factors += i + " ";
    }
}

// Sum of Digits
let temp = n;
let digitSum = 0;
while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}

// Armstrong Number Check
temp = n;
let armstrongSum = 0;
while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** 3;
    temp = Math.floor(temp / 10);
}
let isArmstrong = armstrongSum === n;

// Output
console.log("Number: " + n);
console.log("Sum of first " + n + " numbers: " + sumN);
console.log("Sum of digits: " + digitSum);
console.log("Is it an Armstrong number? " + (isArmstrong ? "Yes" : "No"));
console.log("Is it a prime number? " + (isPrime ? "Yes" : "No"));
console.log("Factors: " + factors);