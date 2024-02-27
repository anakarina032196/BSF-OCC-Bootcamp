function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return num + " is even.";
    } else {
        return num + " is odd.";
    }
}
var num1 = 7
var num2= 20

console.log(checkEvenOrOdd(num1));
console.log(checkEvenOrOdd(num2));