// Importing and exporting modules
import sum, { findMax } from "./myfunctions.js";
import items, { people } from "./myArrays.js";
import { person as lorraine } from "./myObjects.js";

console.log(sum(10, 20, 30));
console.log(findMax(100, 200, 300));

const uniqueItems = new Set(items);
console.log(people);
lorraine.sayHello();