const numbers = [1, 2, 3, 4, 5, 6, 7];

const expenses = [
  { category: "Food", amount: 25 },
  { category: "Transportation", amount: 10 },
  { category: "Food", amount: 15 },
  { category: "Housing", amount: 100 },
  { category: "Transportation", amount: 20 },
];

// array.reduce(callback, initialValue)
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

const totalByCategory = expenses.reduce((acc, curr) => {
  if (acc[curr.category]) {
    acc[curr.category] += curr.amount;
  } else {
    acc[curr.category] = curr.amount;
  }
  return acc;
}, {});

console.log(totalByCategory);