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

const uniqueItems = new Set(items)
const uniqueItemsArray = [...uniqueItems]
console.log(uniqueItemsArray)


const uniquePrices = new Set(prices);
const uniquePricesArray = [...uniquePrices]
console.log(uniquePricesArray)