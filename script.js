let input =prompt("Enter a number;");
let number = Number(input);

if (isNaN(number)){
    console.log("please enter a valid number.");
} else if(number<0){
    console.log("Please enter a positive number.");
}else{
    function sumOfFirstN(n){
        let sum=0;
        for (let i=1;i<=n;i++){
            sum+=i;
        }
        return sum;
    }
     function printTable(n){
        console.log("Multiplication table:");
        for (let i=1;i<=10; i++){
            console.log(`${n} x ${i} = ${n *i}`);
        }
    }
    function checkPrime(n){
        if(n<=1){
            return false;
        }
        for (let i=2; i<n; i++){
            if(n%i ===0){
                return false; 
            }
        }
        return true;
    }
    function getFactors(n){
        let factors=[];
        for(let i=1;i<=n;i++){
            if (n%i===0){
                factors.push(i);
            }
        }
        return factors;
    }
    function sumOfDigits(n){
        let sum=0;
        let temp=n;

        while (temp>0){
            sum+=temp % 10;
            temp=Math.floor(temp/10);
        }
        return sum;
    }
    function checkArmstrong(n){
        let digits=n.toString().length;
        let temp=n;
        let total=0;
        while (temp>0){
            let digit=temp % 10;
            total+=digit**digits;
            temp=Math.floor(temp/10);
        }
        return total===n;
    }

console.log("number:",number);
console.log("sum of first n numbers:",sumOfFirstN(number));
printTable(number);
console.log("prime number:",checkPrime(number)?"yes":"no");
console.log("factors:",getFactors(number).join(","));
console.log("sum of digits:",sumOfDigits(number));
console.log("Armstrong Number:",checkArmstrong(number)?"yes":"no");
}





