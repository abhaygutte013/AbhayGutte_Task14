# AbhayGutte_Task14
# Number Operations Using Loops in JavaScript

## Objective
The objective of this assignment is to create a JavaScript program that performs various operations on a given number using loops and conditional statements.

## Features
- Accepts a number from the user.
- Calculates the sum of the first `n` natural numbers.
- Prints the multiplication table of the given number.
- Checks whether the number is prime.
- Finds and displays all factors of the number.
- Calculates the sum of the digits of the number.
- Checks whether the number is an Armstrong number.
- Displays all results using `console.log()`.

## Technologies Used
- JavaScript

## Program Code

```javascript
let n = parseInt(prompt("Enter a number:"));

let sumN = 0;
for (let i = 1; i <= n; i++) {
    sumN += i;
}

console.log("Table of " + n + ":");
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

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

let factors = "";
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        factors += i + " ";
    }
}

let temp = n;
let digitSum = 0;
while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}

temp = n;
let armstrongSum = 0;
while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** 3;
    temp = Math.floor(temp / 10);
}

let isArmstrong = armstrongSum === n;

console.log("Number: " + n);
console.log("Sum of first " + n + " numbers: " + sumN);
console.log("Sum of digits: " + digitSum);
console.log("Is it an Armstrong number? " + (isArmstrong ? "Yes" : "No"));
console.log("Is it a prime number? " + (isPrime ? "Yes" : "No"));
console.log("Factors: " + factors);
```

## How It Works

1. The user enters a number using `prompt()`.
2. A `for` loop calculates the sum of the first `n` natural numbers.
3. Another `for` loop generates the multiplication table.
4. The program checks if the number is prime using a loop and conditional statements.
5. A loop finds all factors of the number.
6. A `while` loop calculates the sum of the digits.
7. Another `while` loop checks whether the number is an Armstrong number.
8. The results are displayed in the console.

## Sample Input

```
153
```

## Sample Output

```
Table of 153:
153 x 1 = 153
153 x 2 = 306
153 x 3 = 459
153 x 4 = 612
153 x 5 = 765
153 x 6 = 918
153 x 7 = 1071
153 x 8 = 1224
153 x 9 = 1377
153 x 10 = 1530

Number: 153
Sum of first 153 numbers: 11781
Sum of digits: 9
Is it an Armstrong number? Yes
Is it a prime number? No
Factors: 1 3 9 17 51 153
```

## Learning Outcomes

- Understanding user input using `prompt()`.
- Using `for` and `while` loops effectively.
- Applying conditional statements (`if-else`).
- Working with arithmetic and logical operators.
- Solving mathematical problems using JavaScript.
- Displaying results using `console.log()`.

## Author

Created as part of a JavaScript Loops and Conditional Statements assignment.
