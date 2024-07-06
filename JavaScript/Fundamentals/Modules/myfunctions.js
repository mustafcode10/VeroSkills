export default function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  export const findMax = (...numbers) => {
    return Math.max(...numbers);
  };