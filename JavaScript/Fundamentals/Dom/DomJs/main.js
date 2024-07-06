
const myList = document.getElementsByName('topic')

for (let i = 0; i < myList.length; i++) {
    const element = myList[i].textContent;
    // console.log(element)
    
}

// Create, Edit and Render through JavaScript.
const body = document.querySelector('body')
const newH1 = document.createElement('h1')
newH1.setAttribute('class', 'math')
newH1.append('MATH Mustaf')
// body.appendChild(newH1)

const topics = ['String', 'Number', 'Boolean', 'Function', 'Array', 'Object', ]

// for (let i = 0; i < topics.length; i++) {
//     const newP1 = document.createElement('p')
//     newP1.append(topics[i], '')
//     body.appendChild(newP1)    
// }

for (let i = 0; i < topics.length; i++) {
    const newElement = document.createElement('p')
    newElement.textContent = topics[i]
    // body.appendChild(newElement)   
}


// while (topics.length) {
//     const newH3 = document.createElement('h3')
//     newH3.append(topics.shift())
//     body.appendChild(newH3)
    
// }


// NodeList vs Array
// Very similar but NOT the same.

const h1Nodes = document.querySelectorAll('h1')
console.log(h1Nodes)
// h1Nodes.forEach(val => val.textContent = 'Mustaf')

// Convert Node into Array.
const h1Array1 = Array.from(h1Nodes)
const h2Array2 = [...h1Nodes]
console.log(h2Array2)


// Styling and Removing.
// Modifying the CSS of an Element and deleting elements.

const myMath1 = document.querySelector('.math')
myMath1.style.color = "red"
myMath1.style.border =  "10px solid green"
myMath1.style.borderRadius = "50%"

// // remove elements from DOM
myMath1.remove()


// Create and Render.

function createAndRender(tagName, attributesObj,  text){
    const body = document.querySelector('body')
    const tagElement = document.createElement(tagName)
    tagElement.append(text)
    for(const key in attributesObj){
        tagElement.setAttribute(key, attributesObj[key])
    }
    body.appendChild(tagElement)
   return  tagElement
}

// createAndRender('h1', {class: 'math', id: 'test-id', author: 'phil'}, 'Math')

// TextContent Vs Innertext

const myTagElement = document.querySelector('.instructor')
// Both will remove child elements when altered
// myTagElement.textContent = 'Hi There'
// console.log('textContent', myTagElement.textContent)
// console.log('innertext', myTagElement.innerText)

// Innerhtml and insertadjacent.
const myInnerHtml = document.querySelector('h1')
// myInnerHtml.innerHTML = `<h1> I am new First </h1>` + myInnerHtml.innerHTML
// you can replace the element into new element using innerHTML not insertadjacent.
//


// InsertAdjacent, beforebegin, afterbegin, beforeend, afterend

const myInserAdjacent = document.querySelector('.first')
myInserAdjacent.insertAdjacentHTML('beforebegin', '<p> New Content </p>')
myInserAdjacent.insertAdjacentHTML('afterbegin', '<p> New Content </p>')
myInserAdjacent.insertAdjacentHTML('beforeend', '<p> New Content </p>')
myInserAdjacent.insertAdjacentHTML('afterend', '<p> New Content </p>')

myInserAdjacent.insertAdjacentText('beforebegin', 'New Content')
myInserAdjacent.insertAdjacentText('afterbegin', 'New Content')
myInserAdjacent.insertAdjacentText('beforeend', 'New Content')
myInserAdjacent.insertAdjacentText('afterend', 'New Content')







