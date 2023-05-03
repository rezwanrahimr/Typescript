// normal function
function addTwoNumbers(numberOne: number, numberTwo: number): number {
  return numberOne + numberTwo;
}

addTwoNumbers(2, 3);

// arrow Function

const addTwo = (num1: number, num2: number): number => num1 + num2;

// call back function
const number: number[] = [1, 2, 3, 4, 5, 6];
const newNumbers = number.map((element: number) => element * element);

// method
const userOne: {
  name: string;
  position: string;
  details(): void;
} = {
  name: "Rezwan Rahim",
  position: "Jr Software Developer",
  details() {
    return this.name + this.position;
  },
};

console.log(userOne);
