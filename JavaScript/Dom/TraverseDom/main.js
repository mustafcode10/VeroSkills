const myList = document.querySelector('ul')

//Select all children elements
const allChildren2 = document.querySelectorAll('ul > *')
console.log(allChildren2)

// Another you can select all.

const allChildren = myList.children

console.log(allChildren)

// for (const value of allChildren) {
//     value.textContent = 'Updated!!!'
// console.log(value.textContent)
    
// }

// Select Parent from children

console.log(myList.parentElement)

// another way you can find the closest 

console.log(myList.closest('.container'))

// Classlist Properties
/**
 * When you access the .classlist method of an element, an array is returned ???
 * False. When you access the .classList property of an element in JavaScript, it returns a DOMTokenList object, not an array. 
 * This object represents the classes of the element as a collection of tokens, allowing you to manipulate CSS classes.
 *  While it behaves somewhat like an array (you can use methods like add(), remove(), contains(), etc.), it is not an array itself.
 */

const myH2 = document.querySelector('h2')
console.log('-------', myH2.classList)



// classList toggle
myH2.classList.toggle('hide-me')
myH2.classList.toggle('hide-me')
myH2.classList.toggle('hide-me')

//classList add
myH2.classList.add('FIVE')
console.log('Class Add property',myH2.classList)

// classlist remove class
myH2.classList.remove('three')
console.log('Class Remove',myH2.classList)

// classlist replace
myH2.classList.replace('Five', 'Six')
console.log('Class Replace property', myH2.classList)

// classList contains
console.log('Class Contains property', myH2.classList.contains('Six'))




