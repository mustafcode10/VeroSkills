const items = [
  "apple",
  "banana",
  "orange",
  "banana",
  "kiwi",
  "orange",
  "banana",
];

const prices = [25, 50, 75, 100, 50, 25, 120];

// Unique values with Set objects
const mySet = new Set([1, 2, 3, 4]);

const uniqueItems = new Set(items);
const uniqueItemsArray = [...uniqueItems];

const uniquePrices = new Set(prices);
const uniquePricesArray = [...uniquePrices];
console.log(uniquePricesArray);

// for (let num of mySet) {
//   console.log(num * 2);
// }
