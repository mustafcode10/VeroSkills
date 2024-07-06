const body = document.querySelector('body')
const h1 = document.createElement('h2')
console.log(h1)
h1.append('Hi Mustaf bro')
body.appendChild(h1)



const topics = ['String', 'Number', 'Boolean', 'Function', 'Array', 'Object', 'BAKAR']


for (let  index = 0; index < topics.length; index++) {
    const newH1 =  document.createElement('P')
    newH1.append(topics[index])
    body.appendChild(newH1)   
}

// The second solution
// while (topics.length){
//     const secondH1 = document.createElement('h1')
//     secondH1.append(topics.shift())
//     body.appendChild(secondH1)

// }

// Challenge 2

// function createAndRender2(tagName, text){
//   const myTagName = document.createElement(tagName)
//    myTagName.textContent = text
//    document.body.appendChild(myTagName)

// }

// createAndRender2('h1', 'Mustaf Abtidon')

// Challenge part 2


function createAndRender(tagName, object, text){
   const myTag = document.createElement(tagName)
   myTag.append(text)
   for(const key in object){
    myTag.setAttribute(key, object[key])
   }
   document.body.appendChild(myTag)
  
  }

//   createAndRender('h1', {class: 'math2', id: 'id-math3'}, 'Mustaf ahmed')



//  addEventhandle, target plus or minus than increment + 1 or decrease

const mySection = document.querySelector('section')
const minus =  document.querySelector('.minus')
const plus = document.querySelector('.plus')
const result = document.querySelector('.result')


function handleClick(e){
    if(e.target.textContent.includes('-')){
     result.textContent--
    } else {
        result.textContent++
    }

}

function handleClick2(e) {
    if (e.target.classList.contains('plus')) {
        result.textContent = parseInt(result.textContent) + 2;
    } else {
        result.textContent = parseInt(result.textContent) - 2;
    }
}
mySection.addEventListener('click', handleClick)

// input recording

// const name1 = document.querySelector('input')
// const form = document.querySelector('form')
// const copied = document.querySelector('.copied-text')
// console.log('name', name1)

// function handleInput(e){
//     console.log(e.target = e.target.value)
//     copied.textContent = e.target.value
// }
// name1.addEventListener('input', handleInput)

// challenge 4
const counter = document.querySelector('.count')

// const textInputs = document.querySelectorAll('input')
// const nameField = document.querySelector('.result-name')
// const jobField = document.querySelector('.result-job')
// const ageField = document.querySelector('.result-age')
// const myform = document.querySelector('.form1')
// console.log('textinputs', textInputs, nameField)


window.setInterval( function(){
 counter.textContent++
}, 1000)

// Challeng 4
// myform.addEventListener('submit',function handleSubmit(e){
//     e.preventDefault()
//     for (const textInput of textInputs) {
//         console.log('ite', textInput)
//         if (textInput.id === "name"){
//             nameField.textContent += textInput.value
//         } else if( textInput.id === "job"){
//             jobField.textContent += textInput.value
//         }else if(textInput.checked)  {
//             ageField.textContent += textInput.value
//         }
//     }

// })


// Final form Challenge.

const allTextInputs =  document.querySelectorAll('input[type=text]')
const allRadioInputs = document.querySelectorAll('input[type=radio]')
const allOptions = document.querySelectorAll('option')
const nameInput = document.querySelector('#name')
const jobInput = document.querySelector('#job')
const form = document.querySelector('.form1')
const select = document.querySelector('select')

console.log('allTextInputs', allTextInputs,
 'nameInput', nameInput, 'jobInput', 
 jobInput, 'allRadioInput', allRadioInputs, 'allOptions', allOptions)

function handleTextInput(e){
    if(e.target.id === "name"){
        sessionStorage.setItem("name", e.target.value)
    } else {
        sessionStorage.setItem("job", e.target.value)
    }

}

for (const textInput of allTextInputs) {
    console.log('textInput', textInput)
    textInput.oninput = handleTextInput
    
}

function handleRadioInput(e){
     for (let i = 0; i < allRadioInputs.length; i++) {
        const element = allRadioInputs[i];
        if(element.checked){
           sessionStorage.setItem('index', i)
        }
        
     }

}

for(const radioInput of allRadioInputs){
    radioInput.onchange = handleRadioInput

}

select.onchange = function handleSelect(e){
    for (let i = 0; i < allOptions.length; i++) {
        const element = allOptions[i];
        console.log('element', element)
        if (element.value === e.target.value) {
            sessionStorage.setItem('colorIndex', i)
            
        }
        
    }

}



document.body.onload = function(){
    if(sessionStorage.length > 1){
    nameInput.value = sessionStorage.getItem("name")
    jobInput.value = sessionStorage.getItem("job")
    allRadioInputs[sessionStorage.getItem('index')].checked = true
    allOptions[sessionStorage.getItem('colorIndex')].selected = true
    }
}






  
