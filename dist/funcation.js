"use strict";
// normal function
function addTwoNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
addTwoNumbers(2, 3);
// arrow Function
const addTwo = (num1, num2) => num1 + num2;
// call back function
const number = [1, 2, 3, 4, 5, 6];
const newNumbers = number.map((element) => element * element);
// method
const userOne = {
    name: "Rezwan Rahim",
    position: "Jr Software Developer",
    details() {
        return this.name + this.position;
    },
};
console.log(userOne);
