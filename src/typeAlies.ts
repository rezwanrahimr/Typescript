type CountryDetails = {
  name: string;
  area: number;
  population?: number;
};

const countryOne: CountryDetails = {
  name: "Bangladesh",
  area: 570,
};

const countryTwo: CountryDetails = {
  name: "Turky",
  area: 353,
  population: 343,
};

// console.log(countryOne, countryTwo);
type CalculateNum = (x: number, y: number) => number;

const addNum = (
  numberOne: number,
  numberTwo: number,
  calculate: CalculateNum
) => {
  return calculate(numberOne, numberTwo);
};

const result = addNum(2, 5, (x, y) => x + y);
console.log(result);
